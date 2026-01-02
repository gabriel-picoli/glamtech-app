import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  gap: 4px;
`
export const InputWrapper = styled.View<{ $hasError: boolean; $isFocused: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  padding: 12px 10px;
  gap: 8px;

  border-width: 1px;
  border-color: ${({ $hasError, $isFocused, theme }) =>
    $hasError ? theme.colors.error : $isFocused ? theme.colors.hoverPrimary : theme.colors.primary};
  border-radius: 6px;
`

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0;
`

export const LeftSlot = styled.View`
  justify-content: center;
  align-items: center;
`

export const RightSlot = styled.View`
  justify-content: center;
  align-items: center;
`

export const HelperText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
`

export const ErrorText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 4px;
`
