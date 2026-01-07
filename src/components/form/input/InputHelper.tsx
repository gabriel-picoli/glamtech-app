import { InputHelperProps } from './types'

import { HelperText } from './styles'

export function InputHelper({ children }: InputHelperProps) {
  return <HelperText>{children}</HelperText>
}
