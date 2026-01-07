import { ScheduleCalendar } from './components/schedule/calendar/ScheduleCalendar'
import { ScheduleControls } from './components/schedule/header/ScheduleControls'
import { ScheduleDateSelector } from './components/schedule/header/ScheduleDateSelector'
import { ScheduleHeader } from './components/schedule/header/ScheduleHeader'
import { ScheduleProfessionalSelector } from './components/schedule/professionals-selector/ScheduleProfessionalSelector'
import { ScheduleRoot } from './components/schedule/ScheduleRoot'

const Schedule = {
  Root: ScheduleRoot,
  Header: ScheduleHeader,
  Controls: ScheduleControls,
  DateSelector: ScheduleDateSelector,
  ProfessionalSelector: ScheduleProfessionalSelector,
  Calendar: ScheduleCalendar
}

export default Schedule
