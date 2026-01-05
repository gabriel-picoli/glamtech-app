import { BoldText, Container, IconContainer, Title } from './Header.styles'

import { useSidebarContext } from '../Sidebar/SidebarContext'

import Icon from '../../Icon'
import { useSafeArea } from '../../../hooks/useSafeArea'

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
