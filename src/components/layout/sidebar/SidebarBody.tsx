import { SidebarBodyProps } from './types'

import { Body } from './styles'

export function SidebarBody({ children }: SidebarBodyProps) {
  return <Body showsVerticalScrollIndicator={false}>{children}</Body>
}
