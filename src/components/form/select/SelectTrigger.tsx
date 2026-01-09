import { FieldValues, useController } from 'react-hook-form'

import { useSelectContext } from './SelectContext'

import { SelectTriggerProps } from './types'

import { TriggerButton, TriggerText, IconWrapper } from './styles'

import theme from '@styles/theme'

import Icon from '@components/icon'

export function SelectTrigger<T extends FieldValues>({
  name,
  control,
  placeholder = 'Selecione...'
}: SelectTriggerProps<T>) {
  const { isOpen, setIsOpen, selectedValue } = useSelectContext()

  const {
    field: { value },
    fieldState: { error }
  } = useController({
    name,
    control
  })

  const hasError = !!error
  const displayValue = selectedValue || value

  return (
    <TriggerButton $hasError={hasError} $isOpen={isOpen} onPress={() => setIsOpen(!isOpen)}>
      <TriggerText $hasValue={!!displayValue}>{displayValue || placeholder}</TriggerText>

      <IconWrapper>
        <Icon
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={theme.colors.text.secondary}
        />
      </IconWrapper>
    </TriggerButton>
  )
}
