import styled from 'styled-components/native'

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
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
