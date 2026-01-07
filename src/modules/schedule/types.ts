import { ReactNode } from 'react'

export type ScheduleRootProps = {
  children: ReactNode
}

export type ScheduleHeaderProps = {
  children: ReactNode
}

export type ScheduleState = {
  // estado
  selectedProfessionalId: number | null
  selectedDate: string
  viewMode: 'day' | 'week' | '3days'

  // açoes de profissional
  setSelectedProfessional: (id: number) => void

  // açoes de data
  setSelectedDate: (date: string) => void
  goToToday: () => void
  goToPreviousDay: () => void
  goToNextDay: () => void

  // açoes de modo
  setViewMode: (mode: 'day' | 'week' | '3days') => void
}

export type ViewMode = 'day' | 'week' | '3days'

export type CalendarEvent = {
  id: number
  title: string
  start: Date
  end: Date

  clientName: string
  clientId: number
  serviceName: string
  serviceId: number
  professionalName: string
  professionalId: number
  status: string
  value: number
  observation?: string
}

export type ProfessionalFilter = {
  hasSchedule: boolean
  situation: 'ATIVO' | 'INATIVO'
}
