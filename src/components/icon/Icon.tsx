import { FontAwesome5 } from '@expo/vector-icons'

import { IconProps } from './Icon.types'

import theme from '../../styles/theme'

const iconColor = theme.colors.text.primary

export default function Icon({ name, size = 20, color = iconColor }: IconProps) {
  return <FontAwesome5 name={name} size={size} color={color} />
}
