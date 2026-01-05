import { SidebarNavProps } from './Sidebar.types'

import { Nav } from './Sidebar.styles'

export function SidebarNav({ children }: SidebarNavProps) {
  return <Nav>{children}</Nav>
}
