import styled from 'styled-components/native'

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`
