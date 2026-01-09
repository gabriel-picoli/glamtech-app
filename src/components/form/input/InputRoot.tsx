import { useState } from 'react'

import { InputContext } from './InputContext'

import { InputRootProps } from './types'

import { FieldContainer } from '../_shared/styles/FieldContainer'

export function InputRoot({ children }: InputRootProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <InputContext.Provider value={{ hasError, isFocused, setIsFocused, setHasError }}>
      <FieldContainer>{children}</FieldContainer>
    </InputContext.Provider>
  )
}
