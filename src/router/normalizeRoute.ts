export const normalizeRoute = (route: string): string => {
  let normalized = route

  // remove grupos entre parenteses: /(private)/appointments => /appointments
  normalized = normalized.replace(/\/\([^)]+\)/g, '')

  // remove /index do final: /appointments/index => /appointments
  if (normalized.endsWith('/index')) {
    normalized = normalized.slice(0, -6)
  }

  // se ficou vazio, retorna /
  if (normalized === '') {
    normalized = '/'
  }

  return normalized
}
