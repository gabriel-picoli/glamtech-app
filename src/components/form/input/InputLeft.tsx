import { InputLeftProps } from './Input.types'

import { LeftSlot } from './Input.styles'

export function InputLeft({ children }: InputLeftProps) {
  return <LeftSlot>{children}</LeftSlot>
}
