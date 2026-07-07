# Payload Pages Live Preview Design

## Summary

Add Payload admin live preview for `Pages` in `payload-cms-next-tailwind-shadcn-starter-kit`.

The first implementation should use Payload's built-in live preview model and render the full frontend page shell for page previews. Live updates should apply only to the page document being edited. Shared globals such as header, footer, theme, site settings, and SEO settings should remain static during preview for this first pass.

## Goals

- Enable live preview for existing `Pages` documents from Payload admin
- Render the preview inside the real frontend shell
- Keep preview behavior isolated from public published-page routing
- Require authenticated Payload admin access before showing draft content
- Reuse existing page rendering primitives instead of creating a parallel renderer

## Non-Goals

- Do not add live preview for globals in this pass
- Do not make header, footer, theme, or site settings update live
- Do not change public routes to support preview state
- Do not implement preview support for collections other than `Pages`
- Do not expose draft content to unauthenticated users

## Approved Product Decision

Use a dedicated authenticated preview route for pages.

Recommended URL shape:

- `/preview/page/[id]`

Reasoning:

- aligns with Payload's built-in live preview workflow
- keeps public page routes focused on published content only
- avoids mixing preview logic into existing redirect and page-resolution flows
- allows preview fetches to use the page ID directly, which is stable even while slug or hierarchy changes are being edited

## Existing Constraints In This Repository

Current repository facts that shape the design:

- `Pages` already has `versions: { drafts: true }`
- the public frontend is served through `src/app/(frontend)`
- the frontend shell is defined in `src/app/(frontend)/layout.tsx`
- page body rendering is already centralized in `src/app/(frontend)/PageContent.tsx`
- public page lookups currently use published-only queries in `src/app/(frontend)/pageData.ts`
- the project does not yet include page live preview wiring in `Pages` or a page preview route

## Architecture

### 1. Payload collection configuration

Update `src/collections/Pages.ts` to add `admin.livePreview`.

This config should:

- return `null` when the page has not been created yet and therefore has no `id`
- return a full preview URL when the page exists
- include a few standard viewport breakpoints for editor convenience

Recommended behavior:

- base app URL from `process.env.NEXT_PUBLIC_SERVER_URL`
- preview path format: `/preview/page/${data.id}`

### 2. Dedicated preview route

Add a new route at:

- `src/app/(frontend)/preview/page/[id]/page.tsx`

This route should:

- authenticate the incoming request using Payload auth and request headers
- return `notFound()` when no Payload user is authenticated
- load the page by ID using `draft: true`
- return `notFound()` if the page cannot be found
- pass the initial page document to a client live preview component

Because the route lives under `src/app/(frontend)`, it should automatically render inside the existing frontend shell and inherit the current header, footer, theme, and global layout behavior.

### 3. Client live preview component

Add a client component at:

- `src/components/live-preview/PageLivePreview.tsx`

This component should:

- accept `initialData` for the page document
- subscribe with `useLivePreview`
- rerender using the latest page document as edits arrive
- reuse `PageContent` for rendering the page body

This preserves the current rendering path for page blocks and avoids introducing a second block-rendering implementation.

## Data Flow

1. An editor opens a page document in Payload admin.
2. Payload uses `Pages.admin.livePreview.url` to open `/preview/page/:id`.
3. The preview route authenticates the current request.
4. The route fetches the current page draft by ID with the required depth.
5. The route renders the standard frontend shell and mounts the client preview component with `initialData`.
6. The client preview component subscribes to Payload live preview updates.
7. As the editor changes page fields or blocks, Payload sends updated document data to the client component.
8. The preview rerenders `PageContent` with the new page document.

## Rendering Scope

The preview must render the full page shell, not an isolated block canvas.

Included in first-pass preview rendering:

- frontend layout wrapper
- header
- main page body
- footer
- current theme and site chrome

Live-updated in first pass:

- the `Pages` document only

Not live-updated in first pass:

- `Headers`
- `Footers`
- `PageSettings`
- `SiteSettings`
- `ThemeSettings`
- `SEOSettings`

This means the preview reflects the real page frame, but global edits may require a manual refresh to appear while previewing a page.

## Security Model

Draft preview content must never be exposed publicly.

Required protections:

- preview route must require an authenticated Payload user
- unauthenticated requests must resolve to `notFound()`
- missing page IDs or inaccessible documents must resolve to `notFound()`
- public routes such as `/` and `/[...slug]` must continue using published-only queries

This keeps preview behavior private to authenticated CMS users and prevents accidental draft exposure through the public site.

## Error Handling

Handle these cases explicitly:

- unsaved new pages: no live preview URL until the page has an `id`
- missing page: return `notFound()`
- unauthenticated request: return `notFound()`
- stale preview URL for deleted page: return `notFound()`

No custom error UI is required in this pass.

## Dependency Impact

The app needs `@payloadcms/live-preview-react` available to subscribe from the client preview component.

If it is not already present in `payload-cms-next-tailwind-shadcn-starter-kit/package.json`, add it.

## Testing Plan

Manual verification:

1. Create or open an existing page in Payload admin.
2. Confirm the live preview control is available.
3. Open the preview and verify the page renders inside the normal frontend shell.
4. Edit page content or layout blocks and verify the preview updates without a manual refresh.
5. Log out and confirm `/preview/page/:id` no longer exposes draft content.
6. Delete or invalidate the page and confirm the preview route returns `notFound()`.

Code validation:

- run the project's lint command after implementation
- run a type-aware validation path if available in the project

## Rollout Notes

Implement this only for `Pages` first.

If this proves stable, the next phase can extend preview coherence for shared globals by either:

- adding refresh behavior when related globals save, or
- adding true live preview support for the relevant globals and layout dependencies

That later work is intentionally excluded from this design.
