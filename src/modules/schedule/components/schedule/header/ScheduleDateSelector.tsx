import { formatISODateReadable } from '@/utils/date/format'
import { useScheduleStore } from '../../../store/scheduleStore'
import { DateButton, DateSelector, DateText } from '../styles'
import Icon from '@components/icon'

/**
 * Componente de navegação de data
 *
 * Permite navegar entre dias e voltar para hoje
 */
export function ScheduleDateSelector() {
  const { selectedDate, goToPreviousDay, goToNextDay, goToToday } = useScheduleStore()

  // formata a data para exibiçao
  const formattedDate = formatISODateReadable(selectedDate)

  return (
    <DateSelector>
      {/* botão para dia anterior */}
      <DateButton onPress={goToPreviousDay}>
        <Icon name="chevron-left" />
      </DateButton>

      {/* data atual (clique para ir para hoje) */}
      <DateButton onPress={goToToday}>
        <DateText>{formattedDate}</DateText>
      </DateButton>

      {/* botão para proximo dia */}
      <DateButton onPress={goToNextDay}>
        <Icon name="chevron-right" />
      </DateButton>
    </DateSelector>
  )
}
