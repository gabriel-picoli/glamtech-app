import { EventStatus } from '../enums/EventStatus'

import { Recurrence } from './Recurrence'

export interface Event {
  id: number

  clientName: string
  clientId: number

  serviceName: string
  serviceId: number

  professionalName: string
  professionalId: number

  appointmentDate: string
  updateDate: string

  start: string
  end: string

  hasRecurrence: boolean
  recurrence?: Recurrence

  value: number
  status: EventStatus
  observation: string
  onlineAppointment: boolean
  forceFit: boolean
}
