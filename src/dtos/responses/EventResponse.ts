import { ClientResponse } from './ClientReponse'
import { ProfessionalResponse } from './ProfessionalResponse'
import { RecurrenceResponse } from './RecurrenceResponse'
import { RoomResponse } from './RoomResponse'
import { ServiceResponse } from './ServiceResponse'

export interface EventResponse {
  eventoPk: {
    codAgendamento: number
  }

  cliente: ClientResponse

  servico: ServiceResponse

  profissional: ProfessionalResponse

  salaDto: RoomResponse

  dataAgendamento: string
  dataAtualizacao: string

  horaInicio: string
  horaFim: string

  possuiRecorrencia: 'S' | 'N'
  recorrencia?: RecurrenceResponse

  valor: number
  status: string
  observacao: string
  agendamentoOnline: boolean
  forcaEncaixe: 'S' | 'N'
}
