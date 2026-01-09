import { FieldValues, useController } from 'react-hook-form'

import { SelectErrorProps } from './types'

import { ErrorText } from '../_shared/styles/FieldText'

export function SelectError<T extends FieldValues>({ name, control }: SelectErrorProps<T>) {
  const {
    fieldState: { error }
  } = useController({
    name,
    control
  })

  if (!error) return null

  return <ErrorText>{error.message}</ErrorText>
}
