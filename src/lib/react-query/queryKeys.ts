/**
 * Chaves de consulta do react query

 * Organizadas por feature para melhor invalidação de cache
 */
export const queryKeys = {
  // profissionais
  professionals: {
    all: ['professionals'] as const,
    active: () => [...queryKeys.professionals.all, 'active'] as const,
    withSchedule: () => [...queryKeys.professionals.all, 'with-schedule'] as const
  },

  // agendamentos
  events: {
    all: ['events'] as const,
    byProfessional: (professionalId: number, date: string) =>
      [...queryKeys.events.all, 'professional', professionalId, date] as const,
    byDate: (date: string) => [...queryKeys.events.all, 'date', date] as const
  }
}
