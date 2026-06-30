import type { Config, Plugin } from 'payload'

export const globalSoftDelete = (): Plugin => {
  return (config: Config): Config => {
    // Return early if there are no collections defined
    if (!config.collections) return config

    // Map through every collection and set trash to true
    config.collections = config.collections.map((collection) => {
      return {
        ...collection,
        trash: true, // Enables native soft deletes / trash functionality
      }
    })

    return config
  }
}
