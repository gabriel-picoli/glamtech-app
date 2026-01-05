import { BoldText, Container, IconContainer, Title } from './Header.styles'

import { useSidebarContext } from '../../modules/Sidebar/SidebarContext'

import { useSafeArea } from '../../hooks/useSafeArea'

import Icon from '../Icon'

export default function Header() {
  const { toggle } = useSidebarContext()

  const { top } = useSafeArea()

  return (
    <Container $topInset={top}>
      <IconContainer onPress={toggle}>
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
