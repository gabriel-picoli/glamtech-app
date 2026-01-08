import { FieldValues, useController } from 'react-hook-form'

import { useInputContext } from './InputContext'

import { InputFieldsProps } from './types'

import { FieldWrapper } from '../_shared/FieldWrapper'
import { TextInput } from './styles'

import theme from '@styles/theme'

export function InputField<T extends FieldValues>({
  name,
  control,
  ...props
}: InputFieldsProps<T>) {
  const { isFocused, setIsFocused } = useInputContext()

  const {
    field: { onChange, onBlur, value },
    fieldState: { error }
  } = useController({
    name,
    control
  })

  const hasError = !!error

  return (
    <FieldWrapper $hasError={hasError} $isFocused={isFocused}>
      <TextInput
        value={value}
        onChangeText={onChange}
        onBlur={() => {
          onBlur()
          setIsFocused(false)
        }}
        onFocus={() => setIsFocused(true)}
        placeholderTextColor={theme.colors.text.placeholder}
        {...props}
      />
    </FieldWrapper>
  )
}
