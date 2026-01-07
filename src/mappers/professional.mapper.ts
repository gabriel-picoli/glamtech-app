import { Professional } from '@/domain/models/Professional'

import { ProfessionalResponse } from '@/dtos/responses/ProfessionalResponse'

import { mapRoleResponseToDomain } from './role.mapper'

/**
 * mapeia a resposta da api para o modelo de dominio (Professional)
 * convertendo os nomes dos campos do backend para o padrao do dominio.

 * @param professional - dados de retorno da api

 * @returns Professional - dados que o dominio entende
 */
export function mapProfessionalResponseToDomain(professional: ProfessionalResponse): Professional {
  return {
    id: professional.codProfissional,

    professionalName: professional.nomeProfissional,
    scheduleName: professional.nomeSocial,
    birthday: professional.dataNascimento,

    cpf: professional.cpf,
    rg: professional.rg,
    phone: professional.telefone,
    email: professional.email,

    role: mapRoleResponseToDomain(professional.cargo),

    hasSchedule: professional.possuiAgenda === 'S',
    assistant: professional.assistente === 'S',

    scheduleOrder: professional.ordemAgenda,
    situation: professional.situacaoProfissional
  }
}
