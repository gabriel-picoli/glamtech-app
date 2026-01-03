import palette from './palette'

const status = {
  confirmado: palette.green[500],
  agendado: palette.primary[400],
  aguardando: palette.blue[500],
  pago: palette.red[600],
  aguardando_confirmacao: palette.purple?.[500],
  bloqueado: palette.neutral[400]
}

export default status
