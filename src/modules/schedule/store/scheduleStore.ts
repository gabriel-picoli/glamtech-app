import { create } from 'zustand'

import { ScheduleState } from '../types'

import { getToday, goToNextDay, goToPreviousDay } from '@/utils/date/calc'
import { Professional } from '@/domain/models/Professional'

/**
 * Estado da feature de Agenda.
 * Gerencia o profissional selecionado, data atual e modo de visualização.
 */
export const useScheduleStore = create<ScheduleState>((set, get) => ({
  // estado inicial
  selectedProfessionalId: null,
  selectedDate: getToday(),
  viewMode: 'day',
  professionals: [],
  currentProfessional: null,

  // açoes do profissional
  setProfessionals: (professionals) => {
    // seleciona o primeiro profissional
    if (professionals.length > 0) {
      const firstProfessional = professionals[0]

      set({
        professionals,
        selectedProfessionalId: firstProfessional.id,
        currentProfessional: firstProfessional
      })
    } else {
      set({ professionals })
    }
  },

  setSelectedProfessional: (id) => {
    const { professionals } = get()

    const professional = professionals.find((p) => p.id === id)

    set({
      selectedProfessionalId: id,
      currentProfessional: professional || null
    })
  },

  goToNextProfessional: () => {
    const { professionals, selectedProfessionalId } = get()

    if (!professionals.length) return

    const currentIndex = professionals.findIndex((p) => p.id === selectedProfessionalId)
    const nextIndex = (currentIndex + 1) % professionals.length
    const nextProfessional = professionals[nextIndex]

    set({
      selectedProfessionalId: nextProfessional.id,
      currentProfessional: nextProfessional
    })
  },

  goToPreviousProfessional: () => {
    const { professionals, selectedProfessionalId } = get()

    if (!professionals.length) return

    const currentIndex = professionals.findIndex((p) => p.id === selectedProfessionalId)
    const prevIndex = currentIndex <= 0 ? professionals.length - 1 : currentIndex - 1
    const prevProfessional = professionals[prevIndex]

    set({
      selectedProfessionalId: prevProfessional.id,
      currentProfessional: prevProfessional
    })
  },

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
