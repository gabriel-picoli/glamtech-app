import { ActivityIndicator, View } from 'react-native'

import { Calendar } from 'react-native-big-calendar'

import { useEventsByProfessional } from '@/modules/schedule/hooks/useScheduleQueries'

import { useScheduleStore } from '@/modules/schedule/store/scheduleStore'

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
} from '../styles'

import Icon from '@components/icon'

/**
 * Transforma eventos do domínio para o formato do react-native-big-calendar
 *
 */
function transformEventsToCalendar(events: Event[]) {
  return events.map((event) => {
    return {
      // dados extras para renderizaçao customizada
      ...event,
      title: event.clientName,
      start: toJSDate(event.start),
      end: toJSDate(event.end)
    }
  })
}

/**
 * Componente de calendário com timeline de eventos
 *
 * Usa react-native-big-calendar para exibir agenda do profissional
 */
export function ScheduleCalendar() {
  const { selectedProfessionalId, selectedDate, viewMode } = useScheduleStore()

  // busca eventos do profissional
  const {
    data: events,
    isLoading,
    isError
  } = useEventsByProfessional(selectedProfessionalId, selectedDate)

  // estado de carregamento
  if (isLoading) {
    return (
      <CenteredContainer>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <LoadingText>Carregando agenda...</LoadingText>
      </CenteredContainer>
    )
  }

  // estado de erro
  if (isError) {
    return (
      <CenteredContainer>
        <Icon name="exclamation-triangle" size={48} color={theme.colors.error} />
        <EmptyText>Erro ao carregar eventos</EmptyText>
      </CenteredContainer>
    )
  }

  // sem profissional selecionado
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
    <CalendarContainer>
      <Calendar
        events={calendarEvents}
        renderHeader={() => null}
        date={toJSDate(selectedDate)}
        height={600}
        mode={viewMode}
        locale="pt-BR"
        ampm={false}
        minHour={8}
        maxHour={22}
        hourRowHeight={60}
        // customizaçao de renderização de evento
        // TODO: criar componente pra renderizar o evento
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
        // callback quando clica em um evento
        onPressEvent={(event) => {
          console.log('Evento clicado:', event)
          // TODO: abrir modal de detalhes do evento
        }}
        // callback quando clica em celula vazia (para criar novo evento)
        onPressCell={(date) => {
          console.log('Célula clicada:', date)
          // TODO: abrir modal de novo agendamento com horario pre-selecionado
        }}
      />
    </CalendarContainer>
  )
}
