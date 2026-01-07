import { create } from 'zustand'

import { ScheduleState } from '../types'

import { getToday, goToNextDay, goToPreviousDay } from '@/utils/date/calc'

/**
 * Estado da feature de Agenda.

 * Gerencia o profissional selecionado, data atual e modo de visualização.
 */
export const useScheduleStore = create<ScheduleState>((set) => ({
  // estado inicial
  selectedProfessionalId: null,
  selectedDate: getToday(),
  viewMode: 'day',

  // açoes do profissional
  setSelectedProfessional: (id) => set({ selectedProfessionalId: id }),

  // açoes da data
  setSelectedDate: (date) => set({ selectedDate: date }),

  goToToday: () => set({ selectedDate: getToday() }),

  goToPreviousDay: () =>
    set((state) => ({
      selectedDate: goToPreviousDay(state.selectedDate)
    })),

  goToNextDay: () =>
    set((state) => ({
      selectedDate: goToNextDay(state.selectedDate)
    })),

  // açoes do modo
  setViewMode: (mode) => set({ viewMode: mode })
}))
