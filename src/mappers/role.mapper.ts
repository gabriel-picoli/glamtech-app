import { Role } from '@/domain/models/Role'

import { RoleResponse } from '@/dtos/responses/RoleResponse'

/**
 * mapeia a resposta da api para o modelo de dominio (Role)
 * convertendo os nomes dos campos do backend para o padrao do dominio.

 * @param role - dados de retorno da api

 * @returns RoleResponse - dados que o dominio entende
 */
export function mapRoleResponseToDomain(role: RoleResponse): Role {
  return {
    id: role.codCargo,

    role: role.nomeCargo
  }
}
