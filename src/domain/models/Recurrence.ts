export interface Recurrence {
  id: number

  monday: boolean
  tuesday: boolean
  wednesday: boolean
  thursday: boolean
  friday: boolean
  saturday: boolean
  sunday: boolean

  startDate: string
  endDate: string

  start: string
  end: string

  reason: string
}
