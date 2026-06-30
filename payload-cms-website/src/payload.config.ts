import { sqliteAdapter } from '@payloadcms/db-sqlite'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { globalSoftDelete } from './plugins/globalSoftDelete'
import { defaultLexical } from './fields/lexicalEditor'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: 'Admin Panel',
      titleSuffix: '',
      description: 'The best admin panel in the world',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/favicon.png',
        },
      ],
    },
  },
  collections: [Pages, Media, Users],
  editor: defaultLexical,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  globals: [],
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Arabic',
        code: 'ar',
        rtl: true,
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  cors: {
    origins: ['http://localhost:3000'],
  },
  sharp,
  plugins: [globalSoftDelete()],
})
