export interface EventFormModel {
  clientId: number
  serviceId: number
  professionalId: number

  date: string
  start: string
  end: string

  hasRecurrence: 'S' | 'N'
  status: string
  value: number
}
