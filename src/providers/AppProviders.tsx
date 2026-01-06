import { ReactNode } from 'react'

import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { queryClient } from '@/lib/react-query/queryClient'

import theme from '@/styles/theme'

type AppProvidersProps = {
  children: ReactNode
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
