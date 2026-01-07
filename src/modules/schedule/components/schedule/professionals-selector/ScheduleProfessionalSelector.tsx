import { useEffect } from 'react'

import { ActivityIndicator } from 'react-native'

import { useProfessionalsWithSchedule } from '@/modules/schedule/hooks/useScheduleQueries'

import { useScheduleStore } from '@/modules/schedule/store/scheduleStore'

import theme from '@styles/theme'

import {
  ProfessionalButton,
  ProfessionalButtonText,
  ProfessionalScrollView,
  ProfessionalSelector
} from '../styles'

/**
 * Componente de seleção de profissional
 *
 * Lista horizontal com scroll para alternar entre profissionais
 */
export function ScheduleProfessionalSelector() {
  const { selectedProfessionalId, setSelectedProfessional } = useScheduleStore()

  const { data: professionals, isLoading } = useProfessionalsWithSchedule()

  useEffect(() => {
    if (professionals && professionals.length > 0 && !selectedProfessionalId) {
      setSelectedProfessional(professionals[0].id)
    }
  }, [professionals, selectedProfessionalId, setSelectedProfessional])

  if (isLoading) {
    return (
      <ProfessionalSelector>
        <ActivityIndicator size="small" color={theme.colors.primary} />
      </ProfessionalSelector>
    )
  }

  if (!professionals || professionals.length === 0) {
    return null
  }

  return (
    <ProfessionalSelector>
      <ProfessionalScrollView>
        {professionals.map((professional) => {
          if (!professional.id) return null

          const isActive = professional.id === selectedProfessionalId

          return (
            <ProfessionalButton
              key={professional.id}
              $isActive={isActive}
              onPress={() => setSelectedProfessional(professional.id)}
            >
              <ProfessionalButtonText $isActive={isActive}>
                {professional.professionalName}
              </ProfessionalButtonText>
            </ProfessionalButton>
          )
        })}
      </ProfessionalScrollView>
    </ProfessionalSelector>
  )
}
