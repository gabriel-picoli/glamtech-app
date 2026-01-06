import { ServiceCategoryResponse } from './ServiceCategoryResponse'

export interface ServiceResponse {
  codServico: number

  nomeServico: string
  duracaoMinima: number
  descricao: string
  categoria: ServiceCategoryResponse

  folgaNecessaria: number
  permiteAgendaOnline: 'S' | 'N'
  permiteEncaixe: 'S' | 'N'

  retornoDias: number

  valor: number
  custo: number
}
