import { useScheduleContext } from '@/modules/schedule/ScheduleContext'

import { formatISODateReadable } from '@/utils/date/format'

import { Header, DateSelector, DateButton, DateText, ProfessionalName } from './styles'

import Icon from '@components/icon'

/**
 * Header da agenda com navegação de data e nome do profissional
 */
export function ScheduleHeader() {
  const { selectedDate, goToPreviousDay, goToNextDay, goToToday, currentProfessional } =
    useScheduleContext()

  const formattedDate = formatISODateReadable(selectedDate)

  return (
    <Header>
      {/* navegaçao de data */}
      <DateSelector>
        <DateButton onPress={goToPreviousDay}>
          <Icon name="chevron-left" />
        </DateButton>

        <DateButton onPress={goToToday}>
          <DateText>{formattedDate}</DateText>
        </DateButton>

        <DateButton onPress={goToNextDay}>
          <Icon name="chevron-right" />
        </DateButton>
      </DateSelector>

      {/* nome do profissional */}
      {currentProfessional && (
        <ProfessionalName>{currentProfessional.professionalName}</ProfessionalName>
      )}
    </Header>
  )
}
