import { createContext, useContext, ReactNode } from 'react'

import { Mode } from 'react-native-big-calendar'

import { useProfessionalsWithSchedule } from '@/modules/schedule/hooks/useScheduleQueries'

import { useScheduleStore } from '@/modules/schedule/store/scheduleStore'

import { Professional } from '@/domain/models/Professional'

type ScheduleContextType = {
  isLoading: boolean
  isError: boolean
  selectedProfessionalId: number | null
  currentProfessional: any
  selectedDate: string
  professionals: Professional[]
  viewMode: Mode

  goToNextProfessional: () => void
  goToPreviousProfessional: () => void
  goToNextDay: () => void
  goToPreviousDay: () => void
  goToToday: () => void
}

const ScheduleContext = createContext<ScheduleContextType | null>(null)

export function ScheduleProvider({ children }: { children: ReactNode }) {
  const { isLoading, isError } = useProfessionalsWithSchedule()

  // pega o estado da store
  const {
    selectedProfessionalId,
    currentProfessional,
    selectedDate,
    goToNextProfessional,
    goToPreviousProfessional,
    goToNextDay,
    goToPreviousDay,
    goToToday,
    professionals,
    viewMode
  } = useScheduleStore()

  return (
    <ScheduleContext.Provider
      value={{
        isLoading,
        isError,
        selectedProfessionalId,
        currentProfessional,
        selectedDate,
        goToNextProfessional,
        goToPreviousProfessional,
        goToNextDay,
        goToPreviousDay,
        goToToday,
        professionals,
        viewMode
      }}
    >
      {children}
    </ScheduleContext.Provider>
  )
}

export function useScheduleContext() {
  const context = useContext(ScheduleContext)
  if (!context) {
    throw new Error('Schedule components must be used within Schedule.Root')
  }
  return context
}
