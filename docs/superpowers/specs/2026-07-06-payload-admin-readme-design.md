# Payload Admin README Design

## Summary

Design a new `README.md` for `payload-cms-next-tailwind-shadcn-starter-kit` that serves content editors and admin users first. The README should explain what the starter kit can do, how to install and run it from scratch, and how to build a working website step by step from the Payload admin.

The README should replace the current generic template-style content with project-specific documentation based on the actual collections, globals, blocks, and behaviors in this repository.

## Audience

Primary audience:

- Content editors
- Admin users
- Non-technical or lightly technical site operators

Secondary audience:

- Developers who need a short orientation section at the end

The document should assume the reader wants to operate the site through Payload admin, not extend the codebase.

## Goals

The README must:

- Explain what features already exist in the starter kit
- Help a user install and start the project from scratch
- Help a user log into `/admin` and create the first admin account
- Teach a user how to build a website end to end in the right operational order
- Explain each major feature in plain language
- Document important automatic behaviors and constraints
- Provide troubleshooting guidance for common admin-facing failures

## Non-Goals

The README should not:

- Be written primarily as developer API documentation
- Spend large sections on code internals
- Describe features that do not exist in the repository
- Assume the reader already understands Payload concepts

## Repository Facts That Must Shape The README

The README content must reflect the current implementation:

- Payload CMS 3 with Next.js frontend
- SQLite adapter configured in `src/payload.config.ts`
- Email integration via Resend when configured
- Page building through `Pages`
- Reusable `Headers`, `Footers`, and `Navigation Links`
- `Forms` plus stored `Form Submissions`
- `Redirects`
- `System Pages` for `404`, `maintenance`, and `coming soon`
- Global settings through `Page Settings`, `Site Settings`, `Theme Settings`, and `SEO Settings`
- Available page blocks are currently:
  - `Hero 36`
  - `Form`
- Available system page blocks are currently:
  - `System 404`
  - `System Maintenance`
  - `System Coming Soon`

## Important Caveat To Document

The README must explicitly call out a current configuration mismatch:

- `.env.example` currently shows `DATABASE_URL=mongodb://127.0.0.1/your-database-name`
- `src/payload.config.ts` currently uses `@payloadcms/db-sqlite`

The install section must not silently repeat the MongoDB example without explanation. It should clearly tell the reader what to do for the current project state and mention that the environment example does not currently match the configured adapter.

## Recommended README Strategy

Use an "Editor Playbook" structure.

Reasoning:

- It matches the approved audience
- It teaches through a concrete site-building sequence
- It can still include a complete feature reference later in the document
- It avoids overwhelming non-technical readers with implementation detail too early

## Final README Structure

The README should use this chapter order:

1. `What This Starter Kit Is`
2. `Who This README Is For`
3. `What You Can Build With It`
4. `Install From Scratch`
5. `How The Admin Is Organized`
6. `Build A Website Step By Step`
7. `Feature Reference`
8. `Common Workflows`
9. `Troubleshooting`
10. `Developer Notes`

## Detailed README Content Plan

### 1. What This Starter Kit Is

Explain in plain language that the project is a Payload CMS + Next.js starter kit that lets admins build and manage a website using Payload admin. Mention reusable site structure, forms, redirects, branding, SEO, and system modes.

### 2. Who This README Is For

State that the README is written primarily for content editors and admin users. Clarify that it focuses on using the system, not extending the code.

### 3. What You Can Build With It

Summarize capabilities:

- Create and publish pages
- Set a homepage
- Build navigation
- Reuse header and footer presets
- Upload and reuse media
- Add forms to pages
- Review stored submissions
- Manage SEO defaults and page SEO
- Configure 404, maintenance, and coming soon pages
- Create and manage redirects
- Change theme and branding

### 4. Install From Scratch

This section must include:

- Clone the repository
- Copy `.env.example` to `.env`
- Set `PAYLOAD_SECRET`
- Explain the current database setup expectation clearly
- Optionally configure Resend email variables
- Run `pnpm install`
- Run `pnpm dev`
- Open `http://localhost:3000/admin`
- Create the first admin account

This section must also explain that form email notifications depend on the Resend configuration and may not send if email settings are missing.

### 5. How The Admin Is Organized

Provide a sidebar map using project terms:

- `Content`
  - Pages
  - Navigation Links
- `Site Structure`
  - Headers
  - Footers
  - Redirects
  - System Pages
- `Forms`
  - Forms
  - Form Submissions
- `Settings`
  - Site Settings
  - Theme Settings
  - SEO Settings
- `System Defaults`
  - Page Settings / Site Defaults

### 6. Build A Website Step By Step

This is the main walkthrough. It should use the following order:

1. Install and start the project
2. Set up global site identity in `Site Settings`
3. Configure `Theme Settings`
4. Configure `SEO Settings`
5. Create reusable `Navigation Links`
6. Create a `Header`
7. Create a `Footer`
8. Create the homepage in `Pages`
9. Configure the `Hero 36` block
10. Create a reusable form in `Forms`
11. Add a `Form` block to a page
12. Create additional pages
13. Assign homepage, active header, and active footer in `Site Defaults`
14. Publish and verify on the frontend
15. Maintain the live site

The walkthrough should explain why this sequence matters: reusable assets should be created before they are assigned to live site defaults.

### 7. Feature Reference

Each feature chapter should follow the same shape:

- What it is
- What it is used for
- Important fields
- What happens automatically
- Things to watch out for

The README should include feature reference entries for:

- Pages
- Navigation Links
- Headers
- Footers
- Forms
- Form Submissions
- Media
- Redirects
- System Pages
- Site Defaults
- Site Settings
- Theme Settings
- SEO Settings
- Users

### 8. Common Workflows

Include short task-based guides for:

- Change the homepage
- Add a page to navigation
- Create a dropdown navigation group
- Replace the logo or favicon
- Add a contact form
- Review form submissions
- Turn on maintenance mode
- Turn on coming soon mode
- Add a manual redirect
- Recover from a changed page slug

### 9. Troubleshooting

This section should answer admin-facing failures such as:

- Page does not appear on the website
- Homepage does not load
- Form block does not appear
- Form submits but no email arrives
- Image does not appear
- Header or footer is saved but not visible on the site
- Cannot unpublish a page
- Maintenance mode is showing unexpectedly
- Redirect appeared automatically

### 10. Developer Notes

Keep this short. Include:

- Main scripts
- Key folders
- Current adapter / `.env.example` mismatch
- Email setup expectations

## Critical Behavioral Details The README Must Explain

### Pages

- Pages are draft-enabled
- Front page selection depends on a published page
- Pages can be nested using `parent`
- `showInNavigation` can create or maintain a reusable page-linked navigation record automatically
- Published pages cannot be unpublished while still referenced by homepage settings, navigation links, or enabled published redirects

### Navigation Links

- Links are reusable content records, not menu items by themselves
- They can point to internal pages or custom URLs
- They may be created manually or synced from pages
- Headers and footers consume these reusable links

### Headers And Footers

- These are reusable presets
- They do not become live just by being created
- They only affect the frontend after being assigned in `Site Defaults`

### Redirects

- Redirects can be created manually
- Some redirects are automatically created when a published page URL changes
- Enabled published redirects may block a referenced page from being unpublished until dependencies are removed

### System Pages

- System pages are typed as `404`, `maintenance`, or `comingSoon`
- The selected block must match the system page type
- Referenced system pages cannot be unpublished
- Referenced system pages cannot change to a different type until references are removed

### Forms

- The page block expects a published form
- Valid submissions are stored in `Form Submissions`
- Forms use validation
- Spam protection uses a honeypot field
- Rate limiting exists per form and client IP
- Notification emails are only attempted when recipients exist and email transport is configured

### SEO And Site Settings

- Global SEO values act as defaults
- Page-level SEO can override global defaults
- Site branding and contact settings are shared content used across the site experience

## Tone And Writing Rules For README Implementation

The README should be:

- Plain-language
- Task-oriented
- Concrete
- Non-academic
- Accurate to the current codebase

It should avoid:

- Large jargon-heavy explanations
- Long code-centric digressions
- Generic template marketing language

## Acceptance Criteria

The README design is successful if:

- A non-technical admin can follow it from installation to first published website
- Every major feature in the current project is described
- The walkthrough order matches how the system actually works
- Important automatic behaviors and publishing constraints are explained
- The database setup caveat is documented clearly
- The content is specific to this repository, not a generic Payload template

## Implementation Notes

When implementing the README:

- Replace the existing generic README content rather than append to it blindly
- Use the actual collection and global names from the admin UI
- Include example workflows that match the currently available blocks
- Keep developer notes at the end so the document stays editor-first
