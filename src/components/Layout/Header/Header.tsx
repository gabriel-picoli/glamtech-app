import { BoldText, Container, IconContainer, Title } from './Header.styles'

import Icon from '../../Icon'

export default function Header() {
  return (
    <Container>
      <IconContainer onPress={() => {}}>
        <Icon name="bars" />
      </IconContainer>

      <Title>
        <BoldText>GLAM</BoldText>TECH
      </Title>

      <IconContainer onPress={() => {}}>
        <Icon name="user-circle" />
      </IconContainer>
    </Container>
  )
}
