import palette from './palette'

const colors = {
  background: palette.neutral[50],
  surface: palette.neutral[100],
  border: palette.neutral[200],

  text: {
    primary: palette.neutral[900],
    secondary: palette.neutral[600],
    placeholder: palette.neutral[400]
  },

  icon: {
    primary: palette.neutral[900],
    secondary: palette.neutral[600]
  },

  primary: palette.primary[400],
  primaryHover: palette.primary[500],

  error: palette.red[500],
  errorHover: palette.red[600],

  white: palette.neutral[50]
}

export default colors
