import { createContext, useContext } from 'react'

export type SelectContextValue = {
  isOpen: boolean
  searchQuery: string
  selectedValue: string | number | null
  hasError: boolean
  setIsOpen: (open: boolean) => void
  setSearchQuery: (query: string) => void
  setSelectedValue: (value: string | number | null) => void
}

export const SelectContext = createContext<SelectContextValue | null>(null)

export const useSelectContext = () => {
  const context = useContext(SelectContext)

  if (!context) {
    throw new Error('Select component must be used within Select.Root')
  }

  return context
}
