import { SidebarSectionProps } from './types'

import { Section, SectionTitle } from './styles'

export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}

      {children}
    </Section>
  )
}
