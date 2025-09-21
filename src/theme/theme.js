import { createTheme } from '@mui/material/styles'

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#1976d2' },
          background: { default: '#FFFFFF', paper: '#FFFFFF' },
          text: { secondary: '#1C1C1C' },
          container: { default: '#F7F9FB' }
        }
      : {
          primary: { main: '#90caf9' },
          background: { default: '#0f1724', paper: '#0b1220' },
          text: { secondary: '#FFFFFF' },
          container: { default: '#FFFFFF0D' }
        })
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Arial', 'sans-serif'].join(','),
    fontSize: 14, // globally sets base to 0.875rem (14px) instead of 16px
    body1: {
      fontSize: "0.875rem", // ensures default body text is 14px
    },
    body2: {
      fontSize: "0.75rem", // slightly smaller, optional
    },
  }
})

export default function createAppTheme(mode) {
  return createTheme(getDesignTokens(mode))
}