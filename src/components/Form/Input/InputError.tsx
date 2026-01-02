import { FieldValues, useController } from 'react-hook-form'

import { InputErrorProps } from './Input.types'

import { ErrorText } from './Input.styles'

export function InputError<T extends FieldValues>({ name, control }: InputErrorProps<T>) {
  const {
    fieldState: { error }
  } = useController({
    name,
    control
  })

  if (!error) return null

  return <ErrorText>{error.message}</ErrorText>
}
