import { Recurrence } from '@/domain/models/Recurrence'

import { RecurrenceResponse } from '@/dtos/responses/RecurrenceResponse'

/**
 * mapeia a resposta da api para o modelo de dominio (Recurrence),
 * convertendo os nomes dos campos do backend para o padrao do dominio.

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
