import { usePathname, useRouter } from 'expo-router'

import { useSidebarContext } from './SidebarContext'

import { SidebarItemProps } from './Sidebar.types'

import {
  ItemBadge,
  ItemBadgeText,
  ItemButton,
  ItemContent,
  ItemIconContainer,
  ItemLabel
} from './Sidebar.styles'

import theme from '../../../styles/theme'

import Icon from '../../Icon'

const { colors } = theme

const ACTIVE_COLOR = colors.primary
const INACTIVE_COLOR = colors.icon.secondary

export function SidebarItem({ icon, label, href, badge }: SidebarItemProps) {
  const router = useRouter()

  const pathname = usePathname()

  const { close } = useSidebarContext()

  const isActive = pathname === href

  const handlePress = () => {
    router.push(href)
    close()
  }

  return (
    <ItemButton $isActive={isActive} onPress={handlePress}>
      {icon && (
        <ItemIconContainer>
          <Icon name={icon} color={isActive ? ACTIVE_COLOR : INACTIVE_COLOR} />
        </ItemIconContainer>
      )}

      <ItemContent>
        <ItemLabel $isActive={isActive}>{label}</ItemLabel>

        {badge && (
          <ItemBadge>
            <ItemBadgeText>{badge}</ItemBadgeText>
          </ItemBadge>
        )}
      </ItemContent>
    </ItemButton>
  )
}
