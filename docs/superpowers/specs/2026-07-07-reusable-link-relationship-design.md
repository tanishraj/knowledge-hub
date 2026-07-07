# Reusable Link Relationship Design

## Summary

Replace inline link authoring across `payload-cms-next-tailwind-shadcn-starter-kit` with reusable `NavigationLinks` relationships.

Instead of storing `linkType`, `page`, and `url` directly on content consumers, the system should use `NavigationLinks` as the canonical destination model. Consumers such as hero cards and system-page actions should select a reusable `Link` record, while optionally keeping a local `openInNewTab` setting when tab behavior needs to vary by placement.

This design also tightens the page-to-link relationship. Pages should auto-create or maintain their synced reusable `Link` records as soon as they are first saved and have an `id`, rather than relying on placeholder URLs or waiting for publication.

## Goals

- Make `NavigationLinks` the canonical reusable link model
- Remove duplicated inline page/custom-URL destination fields from content consumers
- Let editors select reusable links from dropdowns across the CMS
- Preserve contextual `openInNewTab` behavior where the same destination may be used differently in different places
- Ensure new pages become linkable as soon as they are first saved
- Avoid fake defaults such as `#`

## Non-Goals

- Do not implement a placeholder `#` link fallback
- Do not keep two long-term competing link systems alive
- Do not require pages to be published before they can be linked from drafts
- Do not redesign the visual frontend components beyond what is required to consume reusable links
- Do not change unrelated collection or block behavior

## Product Decision

Use reusable `NavigationLinks` relationships everywhere that currently offers inline `page/custom URL` authoring.

Recommended model:

- `NavigationLinks` remains the canonical destination library
- pages continue creating and maintaining synced `Link` records
- content consumers reference a `Link` relationship
- `openInNewTab` remains local to the consumer when contextual override is useful

Reasoning:

- centralizes destination management
- removes repeated link-authoring logic from multiple schemas
- lets page destinations be reused consistently
- avoids publishing broken placeholder links

## Existing Repository Facts

Current implementation already provides some of the needed foundation:

- `NavigationLinks` already models reusable destinations with page/custom URL support
- `Pages` already has hooks that create or maintain synced `Link` records when `showInNavigation` is enabled
- inline link authoring is currently centralized through `src/fields/cmsLinkFields.ts`
- hero cards currently use the inline link field factory
- system-page action blocks also currently use the inline link pattern
- rendering helpers currently resolve inline link values through `src/lib/cmsLinks.ts`

This means the system is close to a reusable-link architecture already, but consumers still author destinations inline instead of referencing the existing `NavigationLinks` collection.

## Architecture

### 1. Canonical link model

`NavigationLinks` becomes the single reusable destination source.

It should continue supporting:

- page-backed links
- custom URL links
- synced page-owned links
- manual reusable links

This collection remains the right place to store destination identity and reusable metadata such as title and the underlying target.

### 2. Consumer field model

Any consumer currently storing:

- `linkType`
- `page`
- `url`
- optional `openInNewTab`

should instead store:

- `link` relationship to `navigation-links`
- optional local `openInNewTab`

The local `openInNewTab` field is important when the same reusable destination must behave differently depending on where it is rendered.

### 3. First-save page link creation

Pages should become linkable after the first successful save, not only after publication and not through a `#` placeholder.

Recommended behavior:

- unsaved page with no `id`: no synced reusable link exists yet
- first save creates the page and gives it an `id`
- once the page has an `id`, its synced `Link` record is created or maintained
- other drafts can then select that reusable page link

This keeps drafts linkable during authoring without introducing fake or broken destinations.

## Editor Experience

### Unsaved first page case

The first unsaved page in a portal cannot have a reusable page link yet because the page does not exist as a stable record.

Recommended admin behavior:

- disable the reusable page-link picker where the current document has not been saved yet
- show helper text such as `Save this page first to create reusable links.`

This is clearer and safer than generating a temporary `#` value.

### Saved draft case

Once a page has been saved and a synced reusable link exists:

- drafts can link to that page immediately
- editors can select the reusable link from dropdowns in hero cards and other consumers
- the selected destination remains stable even if the page slug later changes, because the reusable `Link` still points to the page relationship

## Data Flow

1. An editor saves a page for the first time.
2. The page receives an `id`.
3. A synced reusable `Link` record is created or updated for that page.
4. Other content consumers query `NavigationLinks` and can select that new reusable link.
5. Consumers store the selected `Link` relationship plus optional local `openInNewTab`.
6. Frontend render helpers resolve the reusable `Link` into a final `href`.
7. If the page slug or hierarchy changes later, the reusable page link still resolves correctly through the page relationship.

## Scope Of Consumer Changes

This design applies broadly anywhere the app currently exposes inline page/custom-URL authoring.

Confirmed current surfaces include:

- hero card links
- system page primary actions
- system page secondary actions

The implementation should identify all current uses of `createCmsLinkFields()` or equivalent inline-link field structures and migrate them to the reusable relationship pattern.

## Rendering Model

Current rendering resolves raw inline link data.

After this change:

- frontend helpers should resolve reusable `NavigationLinks` documents
- rendering components should receive final `href` and `openInNewTab` values derived from the relationship
- local `openInNewTab` should override the reusable link default where the consumer model allows it

This keeps destination resolution centralized and prevents frontend components from needing to know whether a target came from a page relationship or custom URL.

## Migration Strategy

Existing inline link data must be migrated.

Recommended migration behavior:

- inspect existing inline page/custom-URL values on each consumer
- match an existing reusable `Link` when an equivalent destination already exists
- create a new reusable `Link` only when no suitable match exists
- preserve local `openInNewTab` values on the consuming records

After migration:

- consumers should stop writing the old inline fields
- old inline fields should not remain silently active in the schema

This prevents long-term schema drift and duplicated source-of-truth problems.

## Validation And Guardrails

The system should enforce these rules:

- no fake `#` default links
- no reusable page link before a page has been saved and has an `id`
- drafts may link to draft-backed page links after first save
- published content should not silently ship obviously broken link references

Recommended publishing guardrail:

- when publishing content that references a reusable page link, validate or warn if the target page is not published

Whether that is a hard validation failure or a softer editorial warning can be decided during implementation, but the system should not ignore the condition.

## Error Handling

Explicit cases to handle:

- unsaved current page: disable page-link selection and show helper text
- missing reusable link target: fail validation or omit rendering safely
- deleted linked page: reusable `Link` should be handled predictably rather than resolving to a broken frontend URL
- legacy inline data during migration: convert deterministically or surface a migration issue clearly

## Testing Plan

Manual verification:

1. Create the first page in a fresh portal and verify reusable page linking is unavailable until first save.
2. Save the page and verify a synced reusable `Link` is created.
3. Create another draft and verify it can select that reusable page link immediately.
4. Verify hero cards and system-page actions render correctly from reusable `Link` relationships.
5. Verify page slug changes do not break reusable page destinations.
6. Verify no `#` placeholder links are produced.

Code validation:

- validate schema and type generation after replacing inline link fields
- validate frontend helper updates that resolve reusable links
- verify migration behavior on existing content data

## Rollout Notes

This is a structural content-model change, so rollout should be staged carefully:

1. add the reusable relationship field model
2. update page-sync behavior for first-save link creation
3. migrate consumer data from inline links to reusable links
4. switch render helpers to resolve reusable links
5. remove old inline authoring from consumers

This order keeps destination resolution stable while moving the schema toward a single canonical link model.
