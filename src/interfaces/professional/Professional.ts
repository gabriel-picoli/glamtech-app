import { Role } from './Role'

export interface Professional {
  codEmpresa?: number
  codProfissional: number
  nomeProfissional: string
  nomeSocial: string
  telefone: string
  email: string
  cpf: string
  rg: string
  dataNascimento: string
  cargo: Role
  possuiAgenda: string
  ordemAgenda: number
  assistente: string
  situacaoProfissional: string
}
