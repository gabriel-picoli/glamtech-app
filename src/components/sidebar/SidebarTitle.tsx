import { SidebarTitleProps } from './types'

import { SectionTitle } from './styles'

export function SidebarTitle({ children }: SidebarTitleProps) {
  return <SectionTitle>{children}</SectionTitle>
}
