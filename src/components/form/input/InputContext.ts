import { createContext, useContext } from 'react'

export type InputContextValue = {
  hasError: boolean
  isFocused: boolean
  setIsFocused: (focused: boolean) => void
}

export const InputContext = createContext<InputContextValue | null>(null)

export const useInputContext = () => {
  const context = useContext(InputContext)

  if (!context) {
    throw new Error('Input component must be used within Input.Context')
  }

  return context
}
