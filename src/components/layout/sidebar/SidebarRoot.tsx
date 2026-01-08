import { useCallback, useState } from 'react'

import { SidebarContext } from './SidebarContext'

import { SidebarRootProps } from './types'

export function SidebarRoot({ children }: SidebarRootProps) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return (
    <SidebarContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </SidebarContext.Provider>
  )
}
