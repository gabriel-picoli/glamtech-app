import { InputLabelProps } from './types'

import { Label } from '../_shared/styles/FieldLabel'

export function InputLabel({ children }: InputLabelProps) {
  return <Label>{children}</Label>
}
