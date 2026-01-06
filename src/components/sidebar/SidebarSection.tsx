import { SidebarSectionProps } from './Sidebar.types'

import { Section, SectionTitle } from './Sidebar.styles'

export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}

      {children}
    </Section>
  )
}
