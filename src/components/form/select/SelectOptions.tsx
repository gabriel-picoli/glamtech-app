import { useMemo } from 'react'

import { useSelectContext } from './SelectContext'

import { SelectOptionsProps } from './types'

import {
  DropdownContainer,
  SearchInput,
  OptionsList,
  OptionButton,
  OptionText,
  EmptyText,
  IconWrapper
} from './styles'

import theme from '@styles/theme'

export function SelectOptions({ options, onSelect }: SelectOptionsProps) {
  const { isOpen, setIsOpen, searchQuery, setSearchQuery, selectedValue, setSelectedValue } =
    useSelectContext()

  const filteredOptions = useMemo(() => {
    if (!searchQuery) return options

    return options.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [options, searchQuery])

  const handleSelect = (option: { label: string; value: string | number }) => {
    onSelect(option.value)
    setSelectedValue(option.label)
    setIsOpen(false)
    setSearchQuery('')
  }

  if (!isOpen) return null

  return (
    <DropdownContainer>
      <SearchInput
        placeholder="Buscar..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor={theme.colors.text.placeholder}
      />

      <OptionsList showsVerticalScrollIndicator={false}>
        {filteredOptions.length === 0 ? (
          <EmptyText>Nenhum resultado encontrado</EmptyText>
        ) : (
          filteredOptions.map((option) => {
            const isSelected = selectedValue === option.label

            return (
              <OptionButton
                key={option.value}
                $isSelected={isSelected}
                onPress={() => handleSelect(option)}
              >
                <OptionText $isSelected={isSelected}>{option.label}</OptionText>
              </OptionButton>
            )
          })
        )}
      </OptionsList>
    </DropdownContainer>
  )
}
