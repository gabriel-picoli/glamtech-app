import styled from 'styled-components/native'

export const HelperText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
`

export const ErrorText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 4px;
`
