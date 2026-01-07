import { Situation } from '@/domain/enums/Situation'

import { RoleResponse } from './RoleResponse'

export interface ProfessionalResponse {
  codEmpresa: number

  codProfissional: number
  nomeProfissional: string
  nomeSocial: string
  dataNascimento: string

  cpf: string
  rg: string
  telefone: string
  email: string

  cargo: RoleResponse

  possuiAgenda: 'S' | 'N'
  assistente: 'S' | 'N'

  ordemAgenda: number
  situacaoProfissional: Situation
}
