import { ReactNode } from 'react'
import { Control, FieldValues, Path } from 'react-hook-form'

export type SelectRootProps = {
  children: ReactNode
}

export type SelectLabelProps = {
  children: ReactNode
}

export type SelectTriggerProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  placeholder?: string
}

export type SelectOption = {
  label: string
  value: string | number
}

export type SelectOptionsProps = {
  options: SelectOption[]
  onSelect: (value: string | number) => void
}

export type SelectHelperProps = {
  children: ReactNode
}

export type SelectErrorProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
}
