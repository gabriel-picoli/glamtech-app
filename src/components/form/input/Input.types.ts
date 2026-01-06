import { ReactNode } from 'react'
import { TextInputProps } from 'react-native'

import { Control, FieldValues, Path } from 'react-hook-form'

export type InputRootProps = {
  children: ReactNode
}

export type InputLabelProps = {
  children: ReactNode
}

export type InputFieldsProps<T extends FieldValues> = Omit<
  TextInputProps,
  'value' | 'onChangeText'
> & {
  name: Path<T>
  control: Control<T>
}

export interface InputLeftProps {
  children: ReactNode
}

export interface InputRightProps {
  children: ReactNode
}

export type InputHelperProps = {
  children: ReactNode
}

export type InputErrorProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
}
