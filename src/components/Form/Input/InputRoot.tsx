import { useState } from 'react'
import { InputRootProps } from './Input.types'
import { InputContext } from './InputContext'
import { Container } from './Input.styles'

export function InputRoot({ children }: InputRootProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <InputContext.Provider value={{ hasError, isFocused, setIsFocused, setHasError }}>
      <Container>{children}</Container>
    </InputContext.Provider>
  )
}
