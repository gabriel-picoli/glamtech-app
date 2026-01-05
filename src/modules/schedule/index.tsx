import { Calendar } from 'react-native-big-calendar'

const events = [
  {
    title: 'Meeting',
    start: new Date(2026, 0, 5, 10, 0),
    end: new Date(2026, 0, 5, 10, 30)
  },
  {
    title: 'Coffee break',
    start: new Date(2026, 0, 5, 15, 45),
    end: new Date(2026, 0, 5, 16, 30)
  }
]

export default function Schedule() {
  return <Calendar events={events} height={600} />
}
