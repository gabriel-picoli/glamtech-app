import { SidebarFooterProps } from './types'

import { Footer } from './styles'

export function SidebarFooter({ children }: SidebarFooterProps) {
  return <Footer>{children}</Footer>
}
