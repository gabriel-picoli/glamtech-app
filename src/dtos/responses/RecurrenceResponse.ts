export interface RecurrenceResponse {
  codRecorrencia: number

  segunda: boolean
  terca: boolean
  quarta: boolean
  quinta: boolean
  sexta: boolean
  sabado: boolean
  domingo: boolean

  dataInicio: string
  dataFim: string

  horaInicio: string
  horaFim: string
  
  motivo: string
}
