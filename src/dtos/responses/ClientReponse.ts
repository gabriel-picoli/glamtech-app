import { Situation } from '@/domain/enums/Situation'

export interface ClientResponse {
  codCliente: number

  nomeCli: string
  dataAniversario: string
  genero: string

  ddi: number
  numCel: string
  cpf: string
  rg: string
  email: string

  cep: string
  codEstado: string
  codCidade: string
  bairro: string
  endereco: string
  numero: number
  complemento: string

  observacao: string
  situacaoCliente: Situation
}
