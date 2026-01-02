import { InputRightProps } from './Input.types'

import { RightSlot } from './Input.styles'

export function InputRight({ children }: InputRightProps) {
  return <RightSlot>{children}</RightSlot>
}
