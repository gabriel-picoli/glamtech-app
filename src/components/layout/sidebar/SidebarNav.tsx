import { SidebarNavProps } from './types'

import { Nav } from './styles'

export function SidebarNav({ children }: SidebarNavProps) {
  return <Nav>{children}</Nav>
}
