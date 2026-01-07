import { useScheduleStore } from '@modules/schedule/store/scheduleStore'

import {
  ActionButton,
  ActionButtonText,
  ControlsRow,
  ModeButton,
  ModeButtonText,
  ModeButtons
} from '../styles'

import Icon from '@components/icon'

/**
 * Componente de controles principais da agenda
 *
 * Permite alternar entre modos de visualização e adicionar novos eventos
 */
export function ScheduleControls() {
  const { viewMode, setViewMode } = useScheduleStore()

  const handleNewAppointment = () => {
    // TODO: Implementar modal/navegação para novo agendamento
    console.log('Novo agendamento')
  }

  return (
    <ControlsRow>
      {/* Botões de modo de visualização */}
      <ModeButtons>
        <ModeButton $isActive={viewMode === 'day'} onPress={() => setViewMode('day')}>
          <ModeButtonText $isActive={viewMode === 'day'}>Dia</ModeButtonText>
        </ModeButton>

        <ModeButton $isActive={viewMode === '3days'} onPress={() => setViewMode('3days')}>
          <ModeButtonText $isActive={viewMode === '3days'}>3 Dias</ModeButtonText>
        </ModeButton>

        <ModeButton $isActive={viewMode === 'week'} onPress={() => setViewMode('week')}>
          <ModeButtonText $isActive={viewMode === 'week'}>Semana</ModeButtonText>
        </ModeButton>
      </ModeButtons>

      {/* Botão de novo agendamento */}
      <ActionButton onPress={handleNewAppointment}>
        <Icon name="plus" size={14} color="#ffffff" />
        <ActionButtonText>Novo</ActionButtonText>
      </ActionButton>
    </ControlsRow>
  )
}
