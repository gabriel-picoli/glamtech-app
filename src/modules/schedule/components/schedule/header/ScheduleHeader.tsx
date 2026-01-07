import { ScheduleHeaderProps } from '@/modules/schedule/types'

import { Header as StyledHeader } from '../styles'

/**
 * Componente Header da agenda
 *
 * Agrupa controles e seletores
 */

export function ScheduleHeader({ children }: ScheduleHeaderProps) {
  return <StyledHeader>{children}</StyledHeader>
}
