import { useState } from 'react'

import { SelectContext } from './SelectContext'

import { SelectRootProps } from './types'

import { FieldContainer } from '../_shared/styles/FieldContainer'

import { DropdownWrapper } from './styles'

export function SelectRoot({ children }: SelectRootProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedValue, setSelectedValue] = useState<string | number | null>(null)

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        searchQuery,
        selectedValue,
        hasError: false,
        setIsOpen,
        setSearchQuery,
        setSelectedValue
      }}
    >
      <FieldContainer>
        <DropdownWrapper>{children}</DropdownWrapper>
      </FieldContainer>
    </SelectContext.Provider>
  )
}
