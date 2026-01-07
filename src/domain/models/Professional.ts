import { Situation } from '../enums/Situation'

import { Role } from './Role'

export interface Professional {
  id: number

  professionalName: string
  scheduleName: string
  birthday: string

  cpf: string
  rg: string
  phone: string
  email: string

  role: Role

  hasSchedule: boolean
  assistant: boolean

  scheduleOrder: number
  situation: Situation
}
