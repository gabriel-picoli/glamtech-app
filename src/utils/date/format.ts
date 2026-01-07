import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { capitalize } from '../text/capitalize'

/**
 * Formata a data ISO para exibiçao amigavel
 */
export function formatISODateReadable(dateISO: string): string {
  const date = parseISO(dateISO)

  const day = format(date, 'dd', { locale: ptBR })
  const month = format(date, 'MMMM', { locale: ptBR })
  const weekdayFull = format(date, 'EEEE', { locale: ptBR })

  // remove o "feira" do dia da semana
  const weekday = weekdayFull.replace(/-feira$/i, '')

  return `${day} de ${month} - ${capitalize(weekday)}`
}

/**
 * Formata a data ISO para formato brasileiro (dd/MM/yyyy)
 */
export function formatISODateBR(dateISO: string): string {
  return format(parseISO(dateISO), 'dd/MM/yyyy', { locale: ptBR })
}
