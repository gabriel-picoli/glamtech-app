import { Section, SectionTitle } from './Sidebar.styles'
import { SidebarSectionProps } from './Sidebar.types'

export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      
      {children}
    </Section>
  )
}
