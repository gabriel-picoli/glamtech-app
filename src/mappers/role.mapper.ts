import { Role } from '@/domain/models/Role'

import { RoleResponse } from '@/dtos/responses/RoleResponse'

export function mapRoleResponseToDomain(role: RoleResponse): Role {
  return {
    id: role.codCargo,

    role: role.nomeCargo
  }
}
