import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  labels: {
    singular: 'Form Submission',
    plural: 'Form Submissions',
  },
  admin: {
    group: 'Forms',
    useAsTitle: 'id',
    defaultColumns: ['form', 'createdAt'],
    description: 'Stored form submissions. These records are read-only after creation.',
  },
  access: {
    create: () => false,
    delete: ({ req }) => Boolean(req.user),
    read: ({ req }) => Boolean(req.user),
    update: () => false,
  },
  timestamps: true,
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'data',
      label: 'Submitted Data',
      type: 'json',
      required: true,
      admin: {
        readOnly: true,
      },
    },
  ],
}
