import { Navbar12 } from '@/components/navbar12'
import type {
  HeaderNavbar12Block as HeaderNavbar12BlockData,
  Media,
  Page,
  SiteSetting,
} from '@/payload-types'
import { getPageHref } from '@/lib/pagePaths'

type NavbarLink = {
  openInNewTab?: boolean
  title: string
  url?: string
  description?: string
  items?: NavbarLink[]
}

type NavigationItem = NonNullable<HeaderNavbar12BlockData['navigationItems']>[number]
type NavigationChildItem = NonNullable<NavigationItem['children']>[number]
type SecondaryAction = NonNullable<HeaderNavbar12BlockData['secondaryActions']>[number]

const isMediaDoc = (value: number | Media | null | undefined): value is Media => {
  return typeof value === 'object' && value !== null
}

const getLinkUrl = (item: {
  linkType?: 'page' | 'custom' | null
  page?: number | Page | null
  url?: string | null
}): string | undefined => {
  if (item.linkType === 'page') {
    return getPageHref(item.page)
  }

  return item.url ?? undefined
}

const mapNavigationChild = (child: NavigationChildItem): NavbarLink | null => {
  const url = getLinkUrl(child)

  if (!url) {
    return null
  }

  return {
    title: child.label,
    description: child.description ?? undefined,
    url,
    openInNewTab: child.openInNewTab ?? undefined,
  }
}

const mapNavigationItem = (item: NavigationItem): NavbarLink | null => {
  const children = (item.children ?? [])
    .map((child) => mapNavigationChild(child))
    .filter((child): child is NavbarLink => child !== null)

  if (children.length > 0) {
    return {
      title: item.label,
      items: children,
    }
  }

  const url = getLinkUrl(item)

  if (!url) {
    return null
  }

  return {
    title: item.label,
    url,
    openInNewTab: item.openInNewTab ?? undefined,
  }
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

  const url = getLinkUrl(item)

  if (!url) {
    return null
  }

  return {
    title: item.label,
    url,
    openInNewTab: item.openInNewTab ?? undefined,
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

  const navigationItems = (block.navigationItems ?? [])
    .map((item) => mapNavigationItem(item))
    .filter((item): item is NavbarLink => item !== null)

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
