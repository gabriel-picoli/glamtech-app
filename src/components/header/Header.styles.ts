import { StatusBar, Platform } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled.View<{ $topInset: number }>`
  padding-top: ${({ $topInset }) => `${$topInset + 20}px`};
  padding-bottom: 10px;
  height: ${({ $topInset }) => `${$topInset + 56}px`};

  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const IconContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 18px;
`

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.typography.fontFamily.bold};
`
