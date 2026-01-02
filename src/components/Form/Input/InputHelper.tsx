import { InputHelperProps } from './Input.types'

import { HelperText } from './Input.styles'

export function InputHelper({ children }: InputHelperProps) {
  return <HelperText>{children}</HelperText>
}
