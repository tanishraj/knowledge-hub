# Admin Role And Capability Design

## Summary

Design a role-and-capability access system for `payload-cms-next-tailwind-shadcn-starter-kit` that affects only the Payload admin experience.

The system should support three roles:

- `admin`
- `editor`
- `contentEditor`

And it should allow `admin` users to create users and assign feature capabilities that determine what non-admin users can see and manage inside Payload admin.

This is not a frontend entitlement or public feature-flag system. It is an admin-side access control model for CMS operations.

## Goals

- Add explicit user roles to the `Users` collection
- Allow only `admin` users to create and manage users
- Allow `admin` users to assign feature capabilities to `editor` and `contentEditor` users
- Restrict admin collections/globals based on capability assignment
- Ensure backend access control matches admin UI visibility
- Prevent non-admin users from escalating their own access

## Non-Goals

- Do not make capabilities affect the public website/frontend
- Do not introduce per-user frontend personalization
- Do not build a fine-grained permission system for every single field or action
- Do not introduce tenanting or organization-level permission models

## Product Decision

Capabilities are admin-side product-area permissions, not tiny action flags.

Recommended capability set:

- `manage_pages`
- `manage_navigation`
- `manage_redirects`
- `manage_headers`
- `manage_footers`
- `manage_system_pages`
- `manage_forms`
- `manage_form_submissions`
- `manage_media`
- `manage_site_settings`
- `manage_theme_settings`
- `manage_seo_settings`

These capabilities should control which major Payload areas a user can access and manage.

## Roles

### `admin`

- full access to every collection and global
- only role allowed to create users
- only role allowed to assign roles and capabilities
- bypasses capability checks

### `editor`

- broader content-management role
- can access only the domains granted through capabilities

### `contentEditor`

- narrower content-management role
- also capability-driven, typically used for constrained content operations

## Data Model

Extend `src/collections/Users.ts` with:

- `role`
  - required select or radio
  - values: `admin`, `editor`, `contentEditor`
- `capabilities`
  - array/select-based field storing capability keys
  - only relevant for non-admin users

Recommended behavior:

- `admin` does not need capabilities assigned
- non-admin users may start with zero capabilities
- capabilities are assigned explicitly by an admin

## Access Model

Use a shared access helper layer, likely under `src/access/`.

Recommended helper functions:

- `isAdmin(user)`
- `hasCapability(user, capability)`
- `hasAnyCapability(user, capabilities)`
- `canManageUsers(user)`

These helpers should be the single source of truth for access rules.

## Collection And Global Mapping

Map admin areas to capabilities:

- `Pages` → `manage_pages`
- `NavigationLinks` → `manage_navigation`
- `Redirects` → `manage_redirects`
- `Headers` → `manage_headers`
- `Footers` → `manage_footers`
- `SystemPages` → `manage_system_pages`
- `Forms` → `manage_forms`
- `FormSubmissions` → `manage_form_submissions`
- `Media` → `manage_media`
- `SiteSettings` → `manage_site_settings`
- `ThemeSettings` → `manage_theme_settings`
- `SEOSettings` → `manage_seo_settings`
- `Users` → admin only

For all of the above:

- `admin` must always pass
- non-admin users must pass only when holding the required capability

## Payload Integration

### 1. Users collection

Update `Users` to:

- store role and capabilities
- restrict user management to admins
- prevent non-admins from modifying roles or capabilities

### 2. Collections

Apply `access` rules to collections so non-admin users only manage areas covered by capabilities.

Expected behavior:

- users should not be able to create, read, update, or delete restricted content through backend operations
- access must be enforced server-side, not only hidden in UI

### 3. Globals

Apply the same capability model to globals:

- `PageSettings`
- `SiteSettings`
- `ThemeSettings`
- `SEOSettings`

### 4. Admin UI visibility

Payload admin should reflect backend permissions:

- users should not see inaccessible collections/globals in the sidebar
- direct admin URLs should still fail safely if a user lacks access
- only admins should see the `Users` collection

## Security And Guardrails

### Admin-only user management

Only `admin` users may:

- create users
- update other users’ roles
- update other users’ capabilities
- delete users

### No self-escalation

Non-admin users must never be able to:

- promote themselves to `admin`
- change their own role
- add capabilities to themselves

### Backend-first enforcement

UI hiding alone is not enough.

All permission checks must be enforced in Payload access control so direct API/admin route access is also blocked.

## Capability Semantics

Keep capabilities coarse and domain-level.

Do not implement tiny action-specific flags like:

- `can_edit_page_slug`
- `can_open_footer_list`
- `can_change_meta_title`

That would create a brittle permission system and increase administrative complexity.

## Default Rollout Policy

For existing installations:

- the current primary operator should become `admin`
- new non-admin users should default to zero capabilities until assigned

This makes rollout safer and avoids accidental over-permissioning.

## Rollout Order

Recommended implementation sequence:

1. Extend `Users` with `role` and `capabilities`
2. Add shared access helper utilities
3. Lock down `Users` collection to admin only
4. Apply capability checks to collections
5. Apply capability checks to globals
6. Verify admin UI visibility aligns with backend permissions
7. Add tests

This order reduces risk of partial or inconsistent permission behavior.

## Testing Requirements

At minimum, add automated coverage for:

- admin can create users
- editor cannot create users
- contentEditor cannot create users
- non-admin cannot change own role
- non-admin cannot add capabilities to self
- capability grants access to the matching collection/global
- missing capability denies access
- admin bypass works consistently across collections and globals

## Acceptance Criteria

The design is successful if:

- only admins can manage users
- the system supports `admin`, `editor`, and `contentEditor`
- non-admin user access is controlled by assigned capabilities
- restricted areas are blocked both in backend access and admin UI visibility
- non-admin users cannot escalate themselves
- the model stays coarse, understandable, and maintainable

## Implementation Notes

- Favor shared access helpers over collection-by-collection ad hoc logic
- Keep capabilities product-area based
- Make admin a true bypass role
- Ensure this remains an admin-only permission model, not a frontend feature-flag system
