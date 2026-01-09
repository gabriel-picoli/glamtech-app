import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 15px;
`

export const ControlsRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  gap: 12px;
`

export const ModeButtons = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const DateSelector = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 12px;
`

export const DateButton = styled.TouchableOpacity`
  padding: 8px;
`

export const DateText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.fontFamily.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`

export const ProfessionalName = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.fontFamily.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin: 8px 0;
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

export const LoadingText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 8px;
`

export const StatusBadge = styled.View<{ $status: string }>`
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  background-color: ${({ $status, theme }) => {
    const statusColors: Record<string, string> = {
      CONFIRMADO: theme.status.confirmado,
      AGENDADO: theme.status.agendado,
      AGUARDANDO: theme.status.aguardando,
      PAGO: theme.status.pago,
      AGUARDANDO_CONFIRMACAO: theme.status.aguardando_confirmacao
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
