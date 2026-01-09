import { ScheduleProvider } from '../../ScheduleContext'

import { ScheduleRootProps } from '../../types'

import { Container } from './styles'

/**
 * Componente raiz da feature Schedule
 *
 * Container principal
 */
export function ScheduleRoot({ children }: ScheduleRootProps) {
  return (
    <ScheduleProvider>
      <Container>{children}</Container>
    </ScheduleProvider>
  )
}
