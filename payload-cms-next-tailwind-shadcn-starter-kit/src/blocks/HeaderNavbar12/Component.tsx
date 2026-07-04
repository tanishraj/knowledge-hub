import { Navbar12 } from '@/components/navbar12'
import type {
  HeaderNavbar12Block as HeaderNavbar12BlockData,
  Media,
  SiteSetting,
} from '@/payload-types'
import { resolveNavigationLink } from '@/lib/navigationLinks'
import { resolveHeaderNavigationItems } from '@/lib/navigationStructures'

type NavbarLink = {
  openInNewTab?: boolean
  title: string
  url?: string
  description?: string
  items?: NavbarLink[]
}

type SecondaryAction = NonNullable<HeaderNavbar12BlockData['secondaryActions']>[number]

const isMediaDoc = (value: number | Media | null | undefined): value is Media => {
  return typeof value === 'object' && value !== null
}

const mapAction = (
  item:
    | SecondaryAction
    | HeaderNavbar12BlockData['cta']
    | null
    | undefined,
) => {
  if (!item) {
    return null
  }

  const { href, openInNewTab, title } = resolveNavigationLink(item.link)

  if (!href || !(item.label?.trim() || title)) {
    return null
  }

  return {
    title: item.label?.trim() || title || '',
    url: href,
    openInNewTab,
  }
}

export function HeaderNavbar12BlockComponent({
  block,
  siteSettings,
}: {
  block: HeaderNavbar12BlockData
  siteSettings: SiteSetting
}) {
  const siteLogo = isMediaDoc(siteSettings.logo) ? siteSettings.logo : null
  const customLogo = isMediaDoc(block.customLogo) ? block.customLogo : null
  const logoImage = block.logoMode === 'customLogo' ? customLogo ?? siteLogo : siteLogo ?? customLogo
  const logo =
    logoImage?.url != null
      ? {
          url: '/',
          src: logoImage.url,
          alt: logoImage.alt || siteSettings.siteName || 'Site logo',
        }
      : undefined

  const navigationItems = resolveHeaderNavigationItems(block)

  const secondaryButtons = (block.secondaryActions ?? [])
    .map((item) => mapAction(item))
    .filter((item): item is NonNullable<ReturnType<typeof mapAction>> => item !== null)

  const primaryButton =
    block.cta?.enabled === false ? null : mapAction(block.cta ?? null)

  return (
    <Navbar12
      logo={logo}
      navigationItems={navigationItems}
      secondaryButtons={secondaryButtons}
      primaryButton={primaryButton}
    />
  )
}
