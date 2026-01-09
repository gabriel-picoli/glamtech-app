import { SelectLabelProps } from './types'

import { Label } from '../_shared/styles/FieldLabel'

export function SelectLabel({ children }: SelectLabelProps) {
  return <Label>{children}</Label>
}
