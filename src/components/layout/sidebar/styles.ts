import { Animated } from 'react-native'

import styled from 'styled-components/native'

export const Overlay = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ContentWrapper = styled(Animated.View)<{ $topInset: number }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Content = styled.View`
  flex: 1;
`

export const Header = styled.View<{ $topInset: number }>`
  padding-top: ${({ $topInset }) => `${$topInset + 20}px`};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const Body = styled.ScrollView`
  flex: 1;
`

export const Nav = styled.View`
  padding: 16px 0;
`

export const Section = styled.View`
  margin-bottom: 24px;
`

export const SectionTitle = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0 20px;
  margin-bottom: 8px;
`

export const ItemButton = styled.TouchableOpacity<{ $isActive: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.surface : 'transparent')};
  border-left-width: 3px;
  border-left-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : 'transparent'};
`

export const ItemIconContainer = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`

export const ItemContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ItemLabel = styled.Text<{ $isActive: boolean }>`
  font-size: 15px;
  font-family: ${({ $isActive, theme }) =>
    $isActive ? theme.typography.fontFamily.semibold : theme.typography.fontFamily.regular};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.text.primary};
`

export const ItemBadge = styled.View`
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 10px;
  padding: 2px 8px;
  min-width: 20px;
  align-items: center;
  justify-content: center;
`

export const ItemBadgeText = styled.Text`
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
`

export const Footer = styled.View`
  padding: 20px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
`
