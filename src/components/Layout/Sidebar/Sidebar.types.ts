import { ReactNode } from 'react'

export type SidebarRootProps = {
  children: ReactNode
}

export type SidebarTriggerProps = {
  children: ReactNode
}

export type SidebarContentProps = {
  children: ReactNode
}

export type SidebarHeaderProps = {
  children: ReactNode
}

export type SidebarTitleProps = {
  children: ReactNode
}

export type SidebarCloseProps = {
  children?: ReactNode
}

export type SidebarBodyProps = {
  children: ReactNode
}

export type SidebarNavProps = {
  children: ReactNode
}

export type SidebarItemProps = {
  icon?: string
  label: string
  href: string
  badge?: string | number
}

export type SidebarSectionProps = {
  title?: string
  children: ReactNode
}

export type SidebarFooterProps = {
  children: ReactNode
}
