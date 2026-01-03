import { Slot } from 'expo-router'

import Header from '../../components/Layout/Header'

export default function PrivateLayout() {
  return (
    <>
      <Header />

      <Slot />
    </>
  )
}
