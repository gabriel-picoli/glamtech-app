import { SidebarFooterProps } from './Sidebar.types'

import { Footer } from './Sidebar.styles'

export function SidebarFooter({ children }: SidebarFooterProps) {
  return <Footer>{children}</Footer>
}
