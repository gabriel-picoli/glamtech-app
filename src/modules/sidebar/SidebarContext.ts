import { createContext, useContext } from 'react'

export type SidebarContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const SidebarContext = createContext<SidebarContextValue | null>(null)

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error('Sidebar component must be used within Sidebar.Context')
  }

  return context
}
