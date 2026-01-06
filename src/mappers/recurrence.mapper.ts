import { Recurrence } from '@/domain/models/Recurrence'

import { RecurrenceResponse } from '@/dtos/responses/RecurrenceResponse'

/**
 * mapeia os dados que a api retorna e traduz para o formato que o dominio (app) entende

 * @param recurrence - dados de retorno da api

 * @returns Recurrence - dados que o app entende
*/
export function mapRecurrenceResponseToDomain(recurrence: RecurrenceResponse): Recurrence {
  return {
    id: recurrence.codRecorrencia,

    monday: recurrence.segunda,
    tuesday: recurrence.terca,
    wednesday: recurrence.quarta,
    thursday: recurrence.quinta,
    friday: recurrence.sexta,
    saturday: recurrence.sabado,
    sunday: recurrence.domingo,

    startDate: recurrence.dataInicio,
    endDate: recurrence.dataFim,

    start: recurrence.horaInicio,
    end: recurrence.horaFim,

    reason: recurrence.motivo
  }
}
