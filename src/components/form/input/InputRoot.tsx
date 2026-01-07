import { useState } from 'react'

import { InputContext } from './InputContext'

import { InputRootProps } from './types'

import { Container } from './styles'

export function InputRoot({ children }: InputRootProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <InputContext.Provider value={{ hasError, isFocused, setIsFocused, setHasError }}>
      <Container>{children}</Container>
    </InputContext.Provider>
  )
}
