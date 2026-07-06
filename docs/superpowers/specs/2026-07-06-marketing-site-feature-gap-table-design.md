# Marketing Site Feature Gap Table Design

## Summary

Design a concise audit artifact for `payload-cms-next-tailwind-shadcn-starter-kit` that answers one question:

What features are already implemented, what is typically necessary for a full-fledged marketing site, and where are the clear improvement gaps?

This output is intentionally smaller than a full audit report. It should be delivered primarily as a simple comparison table rather than a long narrative document.

## Target Codebase

- `payload-cms-next-tailwind-shadcn-starter-kit`

## Benchmark

The comparison standard is not "better than a blank Payload app."

The benchmark is:

- a broader production-ready marketing site / CMS standard

That means the output should judge the starter kit against what teams typically need for a serious marketing website, including content flexibility, editor usability, SEO, forms, governance, reliability, and operational maturity.

## Audience

Primary audience:

- product owner
- engineering lead
- CMS/platform decision-maker

Secondary audience:

- developer planning follow-up implementation work

## Goal

Produce a compact, scannable artifact that makes it easy to see:

- what is already implemented
- what a full-fledged marketing site would normally require
- which gaps are the most obvious improvement areas

## Non-Goals

The output should not:

- become a long-form hybrid audit
- be organized file-by-file
- include implementation plans
- include speculative features unrelated to marketing sites

## Approved Output Shape

The final deliverable should be a simple table with these columns:

1. `Area`
2. `Currently Implemented`
3. `Needed For A Full-Fledged Marketing Site`
4. `Gap / Improvement`

This should be the primary output.

Optionally, a very short summary may appear before or after the table, but the table is the main artifact.

## Required Coverage Areas

The table should cover the major product capability areas present or expected in this starter kit:

- Content modeling and publishing
- Page builder / layout flexibility
- Navigation and site structure
- Media management
- Forms and lead capture
- SEO and discoverability
- Redirect and URL management
- System pages and site modes
- Branding and theme control
- Admin/auth/editor workflow
- Frontend rendering and website delivery
- Testing / developer safety
- Deployment / environment readiness

## Evaluation Method

For each row:

### Area

A single capability domain, phrased in product terms.

### Currently Implemented

A concise summary of the real, current feature set in this codebase.

Examples:

- draft/publish support for pages and forms
- page hierarchy with parent pages
- reusable headers and footers
- two page blocks currently available
- forms with stored submissions and email notifications

### Needed For A Full-Fledged Marketing Site

A concise statement of what a stronger production-ready marketing CMS would usually include in that area.

Examples:

- richer reusable block library
- stronger editorial workflow
- better media transformation and governance
- analytics or CRM integration pathways

### Gap / Improvement

A direct statement of what is missing or limited today.

This should not be vague. It should clearly name the main shortcomings.

Examples:

- "Block library is too small for varied marketing pages"
- "No role-based editorial governance"
- "Testing exists but coverage is minimal"

## Tone

The table should be:

- concise
- blunt but fair
- product-oriented
- grounded in code reality

It should avoid:

- marketing fluff
- speculative architecture language
- over-explaining obvious concepts

## Repository Facts The Table Should Reflect

The table should reflect the current implementation, including:

- Payload CMS with Next.js frontend
- SQLite database adapter
- Resend email integration when configured
- Collections for pages, navigation links, redirects, headers, footers, system pages, forms, form submissions, media, and users
- Globals for page settings, site settings, theme settings, and SEO settings
- Current page block coverage is limited
  - `Hero36`
  - `Form`
- Current system page block coverage includes
  - `System404`
  - `SystemMaintenance`
  - `SystemComingSoon`
- Soft delete / trash plugin is enabled across collections
- Basic integration tests and Playwright setup exist, but test surface is still small

## Expected Framing

The final output should imply the current product position without needing a large narrative.

Likely framing:

- strong starter foundation for a simple marketing site
- not yet a full-fledged marketing CMS platform

That framing should emerge naturally from the table rows.

## Acceptance Criteria

The design is successful if the final output:

- fits in one compact table
- covers the major product capability areas
- distinguishes implemented features from expected production-grade capabilities
- names concrete missing features or weak areas
- stays specific to `payload-cms-next-tailwind-shadcn-starter-kit`
- is useful for deciding what to improve next

## Implementation Notes

- Keep the output table-first
- Prefer product capability language over internal file organization
- Base every row on the current codebase, not assumptions
- Keep the “needed” column realistic for a marketing site, not a general-purpose enterprise CMS
