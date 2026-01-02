import { Text } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { BoldText, Container, IconContainer, Title } from './Header.style'

export default function Header() {
  return (
    <Container>
      <IconContainer onPress={() => {}}>
        <Feather name="menu" size={24} color="#000" />
      </IconContainer>

      <Title>
        <BoldText>GLAM</BoldText>TECH
      </Title>

      <IconContainer onPress={() => {}}>
        <Feather name="user" size={24} color="#000" />
      </IconContainer>
    </Container>
  )
}
