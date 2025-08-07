// theme.ts

const colors = {
  // Base
  black: '#000000',
  darkGray: '#1E1E1E',
  gray: '#2C2C2E',
  lightGray: '#CCCCCC',
  white: '#FFFFFF',

  // Accent (LiveScore style)
  orange: '#FFA500', // Main accent color
  orangeDark: '#CC8400',
  orangeLight: '#FFB733',

  // Status
  success: '#2ECC71',
  danger: '#E74C3C',
  warning: '#F1C40F',
  info: '#3498DB',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#CCCCCC',
  textMuted: '#999999',

  // Backgrounds
  backgroundPrimary: '#000000',
  backgroundSecondary: '#1E1E1E',
  cardBackground: '#111111',

  // Borders
  border: '#333333'
}

const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
}

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
}

const radii = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  pill: 999,
}

const theme = {
  colors,
  fontSizes,
  spacing,
  radii,
}

export default theme
export type Theme = typeof theme
