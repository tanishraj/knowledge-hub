import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const defaultLexical = lexicalEditor({
  // inline toolbar should be included by default, so you only need to add fixedtoolbar
  features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
})
