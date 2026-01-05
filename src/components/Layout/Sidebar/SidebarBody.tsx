import { SidebarBodyProps } from './Sidebar.types'

import { Body } from './Sidebar.styles'

export function SidebarBody({ children }: SidebarBodyProps) {
  return <Body showsVerticalScrollIndicator={false}>{children}</Body>
}
