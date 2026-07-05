'use client'

import { LivePreviewEditableText } from '@/components/LivePreviewEditableText'
import { Footer2 } from '@/components/footer2'
import { Hero36 } from '@/components/hero36'
import type { Media, Page, SiteSetting } from '@/payload-types'

type PageBlock = NonNullable<Page['layout']>[number]

const isMediaDoc = (value: number | Media | null | undefined): value is Media => {
  return typeof value === 'object' && value !== null
}

const getFooterLogo = (siteSettings: SiteSetting) => {
  const logoImage = isMediaDoc(siteSettings.logo) ? siteSettings.logo : null

  if (!logoImage?.url || !logoImage.alt) {
    return undefined
  }

  return {
    alt: logoImage.alt,
    src: logoImage.url,
    title: siteSettings.siteName || logoImage.alt,
    url: '/',
  }
}

export function RenderBlocks({
  blocks,
  previewMode = false,
  siteSettings,
}: {
  blocks?: PageBlock[] | null
  previewMode?: boolean
  siteSettings: SiteSetting
}) {
  if (!blocks?.length) {
    return null
  }

  const footerLogo = getFooterLogo(siteSettings)

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'footer2':
            return (
              <Footer2
                key={block.id ?? `${block.blockType}-${index}`}
                copyright={
                  previewMode ? (
                    <LivePreviewEditableText
                      path={`layout.${index}.copyright`}
                      value={block.copyright ?? ''}
                    />
                  ) : (
                    (block.copyright ?? undefined)
                  )
                }
                description={
                  previewMode ? (
                    <LivePreviewEditableText
                      multiline
                      path={`layout.${index}.description`}
                      value={block.description ?? ''}
                    />
                  ) : (
                    (block.description ?? undefined)
                  )
                }
                legalLinks={block.legalLinks?.map((link, linkIndex) => ({
                  href: previewMode ? undefined : link.href,
                  name: previewMode ? (
                    <LivePreviewEditableText
                      path={`layout.${index}.legalLinks.${linkIndex}.name`}
                      value={link.name}
                    />
                  ) : (
                    link.name
                  ),
                }))}
                logo={footerLogo}
                sections={block.sections?.map((section, sectionIndex) => ({
                  links: (section.links ?? []).map((link, linkIndex) => ({
                    href: previewMode ? undefined : link.href,
                    name: previewMode ? (
                      <LivePreviewEditableText
                        path={`layout.${index}.sections.${sectionIndex}.links.${linkIndex}.name`}
                        value={link.name}
                      />
                    ) : (
                      link.name
                    ),
                  })),
                  title: previewMode ? (
                    <LivePreviewEditableText
                      path={`layout.${index}.sections.${sectionIndex}.title`}
                      value={section.title}
                    />
                  ) : (
                    section.title
                  ),
                }))}
              />
            )
          case 'hero36':
            return (
              <Hero36
                key={block.id ?? `${block.blockType}-${index}`}
                badge={
                  block.badge?.text
                    ? {
                        text: previewMode ? (
                          <LivePreviewEditableText
                            path={`layout.${index}.badge.text`}
                            value={block.badge.text}
                          />
                        ) : (
                          block.badge.text
                        ),
                      }
                    : undefined
                }
                cards={block.cards.map((card, cardIndex) => {
                  const image =
                    card.visualType === 'image' && isMediaDoc(card.image) && card.image.url
                      ? {
                          alt: card.image.alt,
                          src: card.image.url,
                        }
                      : undefined

                  return {
                    description: previewMode ? (
                      <LivePreviewEditableText
                        multiline
                        path={`layout.${index}.cards.${cardIndex}.description`}
                        value={card.description}
                      />
                    ) : (
                      card.description
                    ),
                    href: previewMode ? undefined : (card.href ?? undefined),
                    icon: card.visualType === 'icon' ? (card.icon ?? undefined) : undefined,
                    image,
                    title: previewMode ? (
                      <LivePreviewEditableText
                        path={`layout.${index}.cards.${cardIndex}.title`}
                        value={card.title}
                      />
                    ) : (
                      card.title
                    ),
                  }
                })}
                description={
                  previewMode ? (
                    <LivePreviewEditableText
                      multiline
                      path={`layout.${index}.description`}
                      value={block.description ?? ''}
                    />
                  ) : (
                    (block.description ?? undefined)
                  )
                }
                heading={
                  previewMode ? (
                    <LivePreviewEditableText
                      path={`layout.${index}.heading`}
                      value={block.heading}
                    />
                  ) : (
                    block.heading
                  )
                }
              />
            )
          default:
            return null
        }
      })}
    </>
  )
}
