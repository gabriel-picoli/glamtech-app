import styled from 'styled-components/native'

export const TriggerButton = styled.TouchableOpacity<{ $hasError: boolean; $isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 12px 10px;

  border-width: 1px;
  border-color: ${({ $hasError, $isOpen, theme }) =>
    $hasError ? theme.colors.error : $isOpen ? theme.colors.primaryHover : theme.colors.primary};
  border-radius: 6px;
`

export const TriggerText = styled.Text<{ $hasValue: boolean }>`
  flex: 1;
  font-size: 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  color: ${({ $hasValue, theme }) =>
    $hasValue ? theme.colors.text.primary : theme.colors.text.placeholder};
`

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
`

export const DropdownWrapper = styled.View`
  position: relative;
  width: 100%;
`

export const DropdownContainer = styled.View`
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  max-height: 300px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`

export const SearchInput = styled.TextInput`
  padding: 12px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`

export const OptionsList = styled.ScrollView`
  max-height: 300px;
`

export const OptionButton = styled.TouchableOpacity<{ $isSelected: boolean }>`
  padding: 14px 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.surface : 'transparent'};
  border-left-width: 3px;
  border-left-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary : 'transparent'};
`

export const OptionText = styled.Text<{ $isSelected: boolean }>`
  font-size: 15px;
  font-family: ${({ $isSelected, theme }) =>
    $isSelected ? theme.typography.fontFamily.semibold : theme.typography.fontFamily.regular};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.primary : theme.colors.text.primary};
  flex: 1;
`

export const EmptyText = styled.Text`
  padding: 20px;
  text-align: center;
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  color: ${({ theme }) => theme.colors.text.secondary};
`
