import { ScheduleRootProps } from '../../types'

import { Container } from './styles'

/**
 * Componente raiz da feature Schedule
 *
 * Container principal
 */

export function ScheduleRoot({ children }: ScheduleRootProps) {
  return <Container>{children}</Container>
}
