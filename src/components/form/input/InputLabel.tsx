import { InputLabelProps } from './Input.types'

import { Label } from '../Form.styles'

export function InputLabel({ children }: InputLabelProps) {
  return <Label>{children}</Label>
}
