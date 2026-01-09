import styled from 'styled-components/native'

export const FieldWrapper = styled.View<{ $hasError: boolean; $isFocused: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  padding: 12px 10px;
  gap: 8px;

  border-width: 1px;
  border-color: ${({ $hasError, $isFocused, theme }) =>
    $hasError ? theme.colors.error : $isFocused ? theme.colors.primaryHover : theme.colors.primary};
  border-radius: 6px;
`
