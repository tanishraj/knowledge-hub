# Payload Next.js POC

This project is a simple Payload CMS + Next.js proof of concept created inside `knowledge-hub/payload-nextjs-poc`.

## What is included

- Payload admin at `/admin`
- SQLite database for easy local setup
- Login-based customer portal using Payload auth
- `Tenants` collection for tenant-aware content ownership
- `Pages` collection with a block-based `layout` field
- Tenant-scoped media and page access rules
- `Hero Section` block editable in the Payload admin
- Frontend rendering for `/tenant-slug/page-slug`
- Optional unique-slug preview at `/preview/page-slug`
- Payload Live Preview for pages at `/preview/page/:id`

## Local setup

1. `cd payload-nextjs-poc`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:3000/admin`
5. Create your first admin user

## First content flow

1. In Payload admin, create a tenant such as `Acme Bakery`
2. Set the tenant slug to `acme`
3. Create a customer user with role `Customer` and link that user to the tenant
4. Create a page titled `Home`, set the slug to `home`, and assign it to the tenant
5. Add a `Hero Section` block and publish the page
6. Open `http://localhost:3000/acme/home`

## Customer portal behavior

- Super admins can see every tenant, user, page, and media item
- Customer users log into the same `/admin` panel
- Customer users only see and edit pages and uploads tied to their own tenant
- Tenant and role are stored on the auth user so access checks work across requests

## Live preview

- Open any page inside Payload admin
- Save the page once so it has a document ID
- Toggle `Live Preview` in the admin edit view
- Payload loads `/preview/page/:id` in an iframe and streams form changes to that page

## Key files

- `src/payload.config.ts`
- `src/collections/Tenants.ts`
- `src/collections/Pages.ts`
- `src/collections/Users.ts`
- `src/access/tenantAccess.ts`
- `src/blocks/Hero.ts`
- `src/components/BlockRenderer.tsx`
- `src/components/blocks/HeroBlock.tsx`
- `src/app/(frontend)/page.tsx`
- `src/app/(frontend)/[slug]/page.tsx`
