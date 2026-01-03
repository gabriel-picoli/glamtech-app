import { StatusBar, Platform } from 'react-native'

import styled from 'styled-components/native'

const statusBarHeight = Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 44

export const Container = styled.View`
  padding-top: ${statusBarHeight}px;
  height: ${statusBarHeight + 56}px;

  background-color: ${({ theme }) => theme.colors.white};

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
