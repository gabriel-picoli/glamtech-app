import Schedule from '@/modules/schedule'

import { Screen } from '@/components/layout/screen/Screen'

export default function Appointments() {
  return (
    <Screen>
      <Schedule.Root>
        <Schedule.Header>
          <Schedule.Controls />
          <Schedule.DateSelector />
          <Schedule.ProfessionalSelector />
        </Schedule.Header>
        <Schedule.Calendar />
      </Schedule.Root>
    </Screen>
  )
}
