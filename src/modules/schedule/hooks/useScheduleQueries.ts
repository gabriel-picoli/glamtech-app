import { useEffect } from 'react'
import { useQuery } from 'react-query'

import { queryKeys } from '@/lib/react-query/queryKeys'

import { EventStatus } from '@/domain/enums/EventStatus'
import { Situation } from '@/domain/enums/Situation'

import { Professional } from '@/domain/models/Professional'
import { Event } from '@/domain/models/Event'

import { getToday } from '@/utils/date/calc'

import { useScheduleStore } from '../store/scheduleStore'

const mockProfessionals: Professional[] = [
  {
    id: 1,
    professionalName: 'Maria Silva',
    hasSchedule: true,
    assistant: false,
    scheduleOrder: 1,
    situation: 'ATIVO' as Situation,
    role: { id: 1, role: 'Cabeleireira' }
  },
  {
    id: 2,
    professionalName: 'João Santos',
    hasSchedule: true,
    assistant: false,
    scheduleOrder: 2,
    situation: 'ATIVO' as Situation,
    role: { id: 2, role: 'Barbeiro' }
  },
  {
    id: 3,
    professionalName: 'Ana Costa',
    hasSchedule: true,
    assistant: false,
    scheduleOrder: 3,
    situation: 'ATIVO' as Situation,
    role: { id: 3, role: 'Manicure' }
  }
]

const mockEvents: Record<number, Event[]> = {
  1: [
    {
      id: 1,
      clientName: 'Cliente A',
      clientId: 1,
      serviceName: 'Corte + Escova',
      serviceId: 1,
      professionalName: 'Maria Silva',
      professionalId: 1,
      appointmentDate: getToday(),
      updateDate: getToday(),
      start: '09:00',
      end: '10:30',
      hasRecurrence: false,
      value: 80,
      status: 'CONFIRMADO' as EventStatus,
      observation: '',
      onlineAppointment: false,
      forceFit: false
    },
    {
      id: 2,
      clientName: 'Cliente B',
      clientId: 2,
      serviceName: 'Coloração',
      serviceId: 2,
      professionalName: 'Maria Silva',
      professionalId: 1,
      appointmentDate: getToday(),
      updateDate: getToday(),
      start: '14:00',
      end: '16:00',
      hasRecurrence: false,
      value: 150,
      status: 'AGENDADO' as EventStatus,
      observation: '',
      onlineAppointment: true,
      forceFit: false
    }
  ],
  2: [
    {
      id: 3,
      clientName: 'Cliente C',
      clientId: 3,
      serviceName: 'Corte Masculino',
      serviceId: 3,
      professionalName: 'João Santos',
      professionalId: 2,
      appointmentDate: getToday(),
      updateDate: getToday(),
      start: '10:00',
      end: '10:30',
      hasRecurrence: false,
      value: 40,
      status: 'CONFIRMADO' as EventStatus,
      observation: '',
      onlineAppointment: false,
      forceFit: false
    }
  ],
  3: []
}

/**
 * Hook para buscar profissionais com agenda ativa.

 * Popula automaticamente a store com os profissionais.
 */
export function useProfessionalsWithSchedule() {
  const query = useQuery(
    queryKeys.professionals.withSchedule(),
    async () => {
      // TODO: substituir por api real
      const result = mockProfessionals.filter((p) => p.hasSchedule)
      return result
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
      cacheTime: 1000 * 60 * 30 // 30 minutos
    }
  )

  // popula a store quando os dados sao carregados
  useEffect(() => {
    if (query.data && query.data.length > 0) {
      useScheduleStore.getState().setProfessionals(query.data)
    }
  }, [query.data])

  return query
}

/**
 * Hook para buscar eventos de um profissional em uma data específica.
 */
export function useEventsByProfessional(professionalId: number | null, date: string) {
  return useQuery(
    queryKeys.events.byProfessional(professionalId ?? 0, date),

    async () => {
      // TODO: substituir por api real
      if (!professionalId) return []
      return mockEvents[professionalId] || []
    },
    {
      enabled: !!professionalId, // so executa se tiver profissional selecionado
      staleTime: 1000 * 60 * 2, // 2 minutos
      cacheTime: 1000 * 60 * 10 // 10 minutos
    }
  )
}
