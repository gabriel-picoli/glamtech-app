import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from '@expo-google-fonts/inter'

import { ThemeProvider } from 'styled-components/native'

import theme from '../styles/theme'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: true,
          title: 'GlamTech'
        }}
      />
    </ThemeProvider>
  )
}
