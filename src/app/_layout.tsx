import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from '@expo-google-fonts/inter'

import AppProviders from '@/providers/AppProviders'

export default function RootLayout() {
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProviders>
        <StatusBar style="dark" />

        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(private)" />
          <Stack.Screen name="(public)" />
        </Stack>
      </AppProviders>
    </GestureHandlerRootView>
  )
}
