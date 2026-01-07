import { EventStatus } from '@/domain/enums/EventStatus'
import { Event } from '@/domain/models/Event'

import { EventRequest } from '@/dtos/requests/EventRequest'
import { EventResponse } from '@/dtos/responses/EventResponse'

import { EventFormModel } from '@/modules/schedule/models/EventFormModel'

import { mapRecurrenceResponseToDomain } from './recurrence.mapper'

/**
 * mapeia os dados do formulario para o DTO de criaçao de evento (EventRequest),
 * convertendo os nomes dos campos do formulario para o padrao do dominio.

 * @param form - dados do formulario de criaçao de evento

 * @returns EventRequest - dto de request utilizado pela api
 */
export function mapFormToCreateEvent(form: EventFormModel): EventRequest {
  return {
    cod_empresa: 1,
    cod_cliente: form.clientId,
    cod_servico: form.serviceId,
    cod_profissional: form.professionalId,

    data_agendamento: form.date,
    hora_inicio: form.start,
    hora_fim: form.end,

    forca_encaixe: 'N',
    possuiRecorrencia: form.hasRecurrence,

    status: form.status as EventStatus,
    valor: form.value
  }
}

/** 
 * mapeia a resposta da api para o modelo de domínio (Event)
 * convertendo os nomes dos campos do backend para o padrao do dominio.

 * @param event - dados de retorno da api

 * @returns Event - dados que o dominio entende
*/
export function mapEventResponseToDomain(event: EventResponse): Event {
  return {
    id: event.eventoPk.codAgendamento,

    clientName: event.cliente.nomeCli,
    clientId: event.cliente.codCliente,

    serviceName: event.servico.nomeServico,
    serviceId: event.servico.codServico,

    professionalName: event.profissional.nomeProfissional,
    professionalId: event.profissional.codProfissional,

    appointmentDate: event.dataAgendamento,
    updateDate: event.dataAtualizacao,

    start: event.horaInicio,
    end: event.horaFim,

    hasRecurrence: event.possuiRecorrencia === 'S',
    recurrence: event.recorrencia ? mapRecurrenceResponseToDomain(event.recorrencia) : undefined,

    value: event.valor,
    status: event.status as EventStatus,
    observation: event.observacao,
    onlineAppointment: event.agendamentoOnline,
    forceFit: event.forcaEncaixe === 'S'
  }
}
