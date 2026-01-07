import { BoldText, Container, IconContainer, Title } from './styles'

import { useSidebarContext } from '../../sidebar/SidebarContext'

import { useSafeArea } from '@hooks/useSafeArea'

import Icon from '../../icon'

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
