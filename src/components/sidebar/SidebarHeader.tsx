import { SidebarHeaderProps } from './Sidebar.types'

import { useSafeArea } from '../../hooks/useSafeArea'

import { Header } from './Sidebar.styles'

export function SidebarHeader({ children }: SidebarHeaderProps) {
  const { top } = useSafeArea()

  return <Header $topInset={top}>{children}</Header>
}
