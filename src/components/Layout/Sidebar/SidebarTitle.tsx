import { SidebarTitleProps } from './Sidebar.types'

import { SectionTitle } from './Sidebar.styles'

export function SidebarTitle({ children }: SidebarTitleProps) {
  return <SectionTitle>{children}</SectionTitle>
}
