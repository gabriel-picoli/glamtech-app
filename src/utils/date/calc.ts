import { DateTime } from 'luxon'

/**
 * Retorna a data de hoje em ISO (yyyy-MM-dd)
 */
export function getToday(): string {
  return DateTime.now().toISODate()!
}

/**
 * Verifica se a data representa o dia atual
 */
export function isToday(dateISO: string): boolean {
  return DateTime.fromISO(dateISO).hasSame(DateTime.now(), 'day')
}

/**
 * Converte DateTime para Date do JavaScript
 */
export function toJSDate(dateISO: string): Date {
  return DateTime.fromISO(dateISO).toJSDate()
}

/**
 * Retorna o dia anterior a uma data ISO
 */
export function goToPreviousDay(dateISO: string): string {
  return DateTime.fromISO(dateISO).minus({ days: 1 }).toISODate()!
}

/**
 * Retorna o proximo dia a partir de uma data
 */
export function goToNextDay(dateISO: string): string {
  return DateTime.fromISO(dateISO).plus({ days: 1 }).toISODate()!
}

/**
 * Combina data e hora em um DateTime
 */
export function combineDateAndTime(date: string, time: string): DateTime {
  return DateTime.fromFormat(`${date} ${time}`, 'yyyy-MM-dd HH:mm')
}
