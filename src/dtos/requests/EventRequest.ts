import { EventStatus } from '@/domain/enums/EventStatus'

export interface EventRequest {
  cod_agendamento?: number

  cod_empresa: number
  cod_cliente: number
  cod_servico: number
  cod_profissional: number
  cod_sala?: number

  data_agendamento: string
  hora_inicio: string
  hora_fim: string

  possuiRecorrencia: 'S' | 'N'
  cod_recorrencia?: number

  valor: number
  agendamento_online?: boolean
  forca_encaixe: 'S' | 'N'
  observacao?: string
  status: EventStatus
}
