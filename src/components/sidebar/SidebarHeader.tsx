import { SidebarHeaderProps } from './types'

import { useSafeArea } from '../../hooks/useSafeArea'

import { Header } from './styles'

export function SidebarHeader({ children }: SidebarHeaderProps) {
  const { top } = useSafeArea()

  return <Header $topInset={top}>{children}</Header>
}
