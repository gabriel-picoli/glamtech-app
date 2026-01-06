import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  gap: 12px;
`

export const ControlsRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ModeButtons = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const ModeButton = styled.TouchableOpacity<{ $isActive: boolean }>`
  padding: 8px 16px;
  border-radius: 6px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.background};
`

export const ModeButtonText = styled.Text<{ $isActive: boolean }>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.fontFamily.medium};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.text.white : theme.colors.text.primary};
`

export const ActionButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const ActionButtonText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.fontFamily.semibold};
  color: ${({ theme }) => theme.colors.text.white};
`

export const DateSelector = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const DateButton = styled.TouchableOpacity`
  padding: 8px;
`

export const DateText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`

export const CalendarContainer = styled.View`
  flex: 1;
`

export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const EmptyText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  margin-top: 12px;
`

export const StatusBadge = styled.View<{ $status: string }>`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ $status, theme }) => {
    // Usa as cores do tema baseado no status
    const statusColors: Record<string, string> = {
      confirmado: theme.status.confirmado,
      agendado: theme.status.agendado,
      aguardando: theme.status.aguardando,
      pago: theme.status.pago,
      aguardando_confirmacao: theme.status.aguardando_confirmacao,
      bloqueado: theme.status.bloqueado,
      cancelado: theme.colors.error
    }
    return statusColors[$status] || theme.colors.primary
  }};
`

export const StatusBadgeText = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.typography.fontFamily.semibold};
  color: ${({ theme }) => theme.colors.text.white};
  text-transform: uppercase;
`
