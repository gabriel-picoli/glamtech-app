import { ActivityIndicator, View, Animated } from 'react-native'
import { Calendar } from 'react-native-big-calendar'
import { GestureDetector } from 'react-native-gesture-handler'

import { useScheduleContext } from '../../ScheduleContext'

import { useEventsByProfessional } from '@/modules/schedule/hooks/useScheduleQueries'

import { useSwipeAnimation } from '@/modules/schedule/hooks/useSwipeAnimation'

import { Event } from '@/domain/models/Event'

import { toJSDate } from '@/utils/date/calc'

import theme from '@styles/theme'

import {
  CalendarContainer,
  CenteredContainer,
  EmptyText,
  LoadingText,
  StatusBadge,
  StatusBadgeText
} from './styles'

import Icon from '@components/icon'

/**
 * Transforma eventos do domínio para o formato do react-native-big-calendar
 */
function transformEventsToCalendar(events: Event[]) {
  return events.map((event) => ({
    ...event,
    title: event.clientName,
    start: toJSDate(event.start),
    end: toJSDate(event.end)
  }))
}

/**
 * Componente de calendário com swipe para navegar entre profissionais
 */
export function ScheduleCalendar() {
  const {
    selectedProfessionalId,
    selectedDate,
    viewMode,
    goToNextProfessional,
    goToPreviousProfessional
  } = useScheduleContext()

  const {
    data: events,
    isLoading,
    isError
  } = useEventsByProfessional(selectedProfessionalId, selectedDate)

  // animaçao de swipe
  const { gesture, animatedStyle } = useSwipeAnimation({
    onSwipeLeft: goToNextProfessional,
    onSwipeRight: goToPreviousProfessional,
    threshold: 80,
    // chave para resetar a animaçao quando troca de profissional e evitar que a agenda quebre
    resetKey: selectedProfessionalId
  })

  if (isLoading) {
    return (
      <CenteredContainer>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <LoadingText>Carregando agenda...</LoadingText>
      </CenteredContainer>
    )
  }

  if (isError) {
    return (
      <CenteredContainer>
        <Icon name="exclamation-triangle" size={48} color={theme.colors.error} />
        <EmptyText>Erro ao carregar eventos</EmptyText>
      </CenteredContainer>
    )
  }

  if (!selectedProfessionalId) {
    return (
      <CenteredContainer>
        <Icon name="user-clock" size={48} color={theme.colors.text.secondary} />
        <EmptyText>Selecione um profissional para ver a agenda</EmptyText>
      </CenteredContainer>
    )
  }

  const calendarEvents = events ? transformEventsToCalendar(events) : []

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[{ flex: 1 }, animatedStyle]}>
        <CalendarContainer>
          <Calendar
            key={`calendar-${selectedProfessionalId}-${selectedDate}`}
            events={calendarEvents}
            renderHeader={() => null}
            date={toJSDate(selectedDate)}
            swipeEnabled={false}
            height={600}
            mode={viewMode}
            locale="pt-BR"
            ampm={false}
            minHour={8}
            maxHour={22}
            hourRowHeight={40}
            renderEvent={(event: any) => (
              <View style={{ flex: 1, padding: 4, gap: 4 }}>
                <StatusBadge $status={event.status}>
                  <StatusBadgeText>{event.status}</StatusBadgeText>
                </StatusBadge>
                <View>
                  <EmptyText style={{ color: '#000', fontWeight: '600', fontSize: 12 }}>
                    {event.clientName}
                  </EmptyText>
                  <EmptyText style={{ color: '#666', fontSize: 11 }}>{event.serviceName}</EmptyText>
                </View>
              </View>
            )}
            onPressEvent={(event) => {
              console.log('Evento clicado:', event)
              // TODO: abrir modal de detalhes do evento
            }}
            onPressCell={(date) => {
              console.log('Célula clicada:', date)
              // TODO: abrir modal de novo agendamento
            }}
          />
        </CalendarContainer>
      </Animated.View>
    </GestureDetector>
  )
}
