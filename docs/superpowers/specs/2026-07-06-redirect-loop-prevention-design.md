# Redirect Loop Prevention Design

## Summary

Design a fix for circular redirects in `payload-cms-next-tailwind-shadcn-starter-kit` when a published page changes slug or path multiple times and reclaims a previous URL.

The current bug occurs because page-path redirects are auto-created on rename, but older redirects remain active even after a page reclaims an earlier path. This can create redirect loops such as:

- `/home -> /homepage`
- `/homepage -> /home`

In this state, the page may no longer load because redirect resolution sends the request into a cycle.

## Problem Statement

Current behavior is append-oriented:

- a published page changes path
- `createRedirectsForChangedPagePath.ts` creates redirects from the old path to the new path
- previously created redirects are not cleaned up when a page reclaims an earlier path
- `getRedirectByPath` resolves a redirect without protecting against self-loops or short cycles

This produces stale redirects that should no longer remain active once a live page retakes a path.

## User Requirement

Approved behavior:

- old redirects that create circular redirects should not remain active
- when a page reclaims an old path, the live page path should win
- the system does not need to preserve old redirect history if it creates a loop
- deleting or disabling conflicting old redirects is acceptable

Concrete example:

1. Page slug starts as `home` and path is `/home`
2. Page slug changes to `homepage`, creating `/home -> /homepage`
3. Page slug changes back to `home`
4. The old redirect `/home -> /homepage` must no longer stay active
5. The active result should be:
   - `/home` renders the live page directly
   - `/homepage` should redirect to `/home`

## Goals

- Prevent circular redirects caused by repeated page path changes
- Ensure the live page path always takes precedence over redirects
- Remove or disable stale redirects that conflict with a reclaimed page path
- Add runtime protection so bad redirect data cannot break page rendering
- Preserve current valid redirect behavior for normal page migrations and descendant path changes

## Non-Goals

- Preserve every historical redirect record regardless of validity
- Build a full redirect graph management system
- Add new admin UI concepts for redirect ownership
- Refactor unrelated page or routing behavior

## Existing Relevant Code

### Redirect creation

File:

- `payload-cms-next-tailwind-shadcn-starter-kit/src/hooks/createRedirectsForChangedPagePath.ts`

Current responsibilities:

- detect page path changes for published pages
- create redirect from old path to new destination
- create descendant redirects when a parent page path changes

Current gap:

- does not clean up active redirects that now conflict with the page's new live path

### Redirect lookup

File:

- `payload-cms-next-tailwind-shadcn-starter-kit/src/lib/redirects.ts`

Current responsibilities:

- find enabled redirect by incoming path
- resolve destination
- return redirect target for route handling

Current gap:

- no self-loop guard
- no short-cycle protection
- trusts redirect data too much

### Frontend route handling

File:

- `payload-cms-next-tailwind-shadcn-starter-kit/src/app/(frontend)/[...slug]/page.tsx`

Current behavior:

- check system mode
- redirect homepage alias to `/`
- resolve redirect
- otherwise load page by path

Implication:

- if redirect resolution returns a loop, the frontend route will redirect endlessly instead of loading the page

## Recommended Fix Strategy

Use two layers:

1. **Write-time cleanup**
   - remove or disable stale redirects when a page reclaims a live path
2. **Read-time guard**
   - ignore self-looping or cyclic redirects so bad existing data cannot break requests

This is intentionally stricter than preserving redirect history. The system should favor a correct live page over old auto-generated redirects.

## Redirect Ownership Rule

The fix should enforce these rules:

- A published page's current live path has priority over redirects
- A redirect must not stay active if its `fromPath` is now the live path of a published page
- Auto-generated redirects are historical mappings only
- A redirect must never resolve back to the same normalized request path
- A short repeated redirect chain must be treated as invalid

## Design Details

### 1. Write-Time Cleanup In `createRedirectsForChangedPagePath.ts`

When a published page path changes:

1. Compute `oldPath` and `newPath`
2. If either path is missing or unchanged, do nothing
3. Before creating the new redirect, find enabled redirects whose `fromPath` equals `newPath`
4. If found, remove them from the active redirect set
   - required behavior: disable conflicting stale redirects by setting `enabled` to `false`
   - do not leave a conflicting redirect active on a reclaimed live page path
5. Create or keep the redirect from `oldPath` to the page's current destination
6. Continue descendant redirect generation for nested pages

This ensures that when a page reclaims `/home`, no active redirect is allowed to continue intercepting `/home`.

### 2. Read-Time Guard In `redirects.ts`

Redirect resolution should become defensive:

1. Normalize the incoming path
2. Resolve the matching enabled redirect
3. Normalize the resolved destination when it is an internal path
4. If destination equals the incoming path, return `null`
5. If following a short redirect chain repeats a previously seen normalized path, return `null`
6. If a page destination cannot resolve to a valid href, return `null`

This does not replace write-time cleanup. It is a safety net for:

- old bad data already in the database
- manually created invalid redirects
- future edge cases missed by redirect creation logic

### 3. Route-Level Result

No changes are required to frontend route flow if `getRedirectByPath` becomes safe.

Expected route behavior:

- if a valid redirect exists, redirect normally
- if redirect data is invalid or cyclic, treat it as no redirect
- continue normal page lookup so the page can render if it exists

## Data Policy

The approved data policy is:

- conflicting stale redirects do not need to be preserved
- correctness of active routing is more important than retaining redirect history

That means the implementation should:

- disable conflicting redirects by setting `enabled` to `false`

This is the required behavior because it:

- removes the redirect from the active routing set
- avoids destructive deletion
- keeps the record available for admin inspection if needed

The result must ensure:

- the live page path is not intercepted
- the circular redirect is removed
- the active redirect set no longer contains the loop

## Example Lifecycle

### Case: page reclaims prior path

Initial state:

- page path: `/home`

After rename to `/homepage`:

- page path: `/homepage`
- active redirect: `/home -> /homepage`

After rename back to `/home`:

- before creating new redirect, remove or disable conflicting `/home -> /homepage`
- create or keep `/homepage -> /home`

Final active state:

- `/home` serves the page
- `/homepage` redirects to `/home`
- no loop remains

## Edge Cases

### Existing invalid data

If the database already contains:

- `/home -> /homepage`
- `/homepage -> /home`

Then read-time resolution must not redirect in a cycle. It should return `null` and allow page lookup to continue.

### Self-loop redirect

If a redirect resolves `/home -> /home`, it must be ignored.

### Nested pages

If a parent page path changes, descendant redirects should continue working. Cleanup for reclaimed paths must not break descendant migration behavior.

### Missing page href

If a page-backed redirect points to a relation that cannot resolve to a path, treat it as invalid and ignore it.

## Testing Requirements

Automated coverage should be added in the existing test setup.

### Integration tests

Add tests for redirect utilities and hook behavior covering:

1. single rename creates expected redirect
2. rename back removes or disables stale conflicting redirect
3. self-loop redirect is ignored
4. short cycle redirect chain is ignored
5. invalid page destination is ignored safely

### End-to-end coverage

Add at least one scenario that exercises:

1. create page at `/home`
2. rename to `/homepage`
3. rename back to `/home`
4. verify `/home` loads the page directly
5. verify `/homepage` redirects once to `/home`
6. verify no redirect loop occurs

### Regression coverage

Keep coverage for descendant redirect generation when parent paths change so this fix does not break valid migration behavior.

## Acceptance Criteria

The fix is successful if:

- a page can reclaim an old path without being blocked by a stale redirect
- circular redirects are not left active after slug/path changes
- redirect resolution does not loop on self-referential or cyclic redirect data
- normal redirects still work
- descendant redirect behavior remains intact

## Implementation Notes

- Keep the fix localized to redirect creation and redirect resolution
- Avoid introducing unrelated routing refactors
- Favor simple active-state cleanup over complex historical redirect reconciliation
- Treat read-time protection as mandatory backup, not optional polish
