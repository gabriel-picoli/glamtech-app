import { InputHelperProps } from './types'

import { HelperText } from '../_shared/FieldText'

export function InputHelper({ children }: InputHelperProps) {
  return <HelperText>{children}</HelperText>
}
