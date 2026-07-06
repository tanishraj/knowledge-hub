import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload'

import {
  adminCapabilityCheckboxFields,
  adminOnlyAccess,
  adminOrFirstUserAccess,
  adminRoleOptions,
  allAdminCapabilities,
  hideFromNonAdmin,
  normalizeAdminRole,
  toAdminCapabilitiesMap,
} from '@/access/adminCapabilities'

const showOnlyForAuthenticatedAdminUser = (
  _: Record<string, unknown>,
  __: Record<string, unknown>,
  { user }: { user?: unknown },
) => {
  return Boolean(user)
}

const normalizeUserAccessFields: CollectionBeforeChangeHook = async ({
  data,
  operation,
  originalDoc,
  req,
}) => {
  if (!data) {
    return data
  }

  let defaultRole = normalizeAdminRole(originalDoc?.role, 'contentEditor')

  if (operation === 'create') {
    const { totalDocs } = await req.payload.count({
      collection: 'users',
      overrideAccess: true,
      where: {},
    })

    if (totalDocs === 0) {
      defaultRole = 'admin'
    }
  }

  const nextRole = normalizeAdminRole(data.role, defaultRole)

  data.role = nextRole
  data.capabilities =
    nextRole === 'admin'
      ? toAdminCapabilitiesMap(allAdminCapabilities)
      : toAdminCapabilitiesMap(data.capabilities ?? originalDoc?.capabilities)

  return data
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    group: 'Admin',
    hidden: hideFromNonAdmin,
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    create: adminOrFirstUserAccess,
    delete: adminOnlyAccess,
    read: adminOnlyAccess,
    readVersions: adminOnlyAccess,
    update: adminOnlyAccess,
  },
  hooks: {
    beforeChange: [normalizeUserAccessFields],
  },
  fields: [
    // Email added by default
    {
      name: 'role',
      type: 'select',
      defaultValue: 'contentEditor',
      options: [...adminRoleOptions],
      required: true,
      admin: {
        condition: showOnlyForAuthenticatedAdminUser,
        description: 'Controls the base admin role for this user.',
        position: 'sidebar',
      },
    },
    {
      name: 'capabilities',
      type: 'group',
      admin: {
        condition: showOnlyForAuthenticatedAdminUser,
        description:
          'Choose which admin areas this user can access. Admin users always receive full access.',
      },
      fields: [...adminCapabilityCheckboxFields],
    },
  ],
}
