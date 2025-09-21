import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import createAppTheme from './theme/theme'
import useDarkMode from './hooks/useDarkMode'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Order from './pages/Order'

export default function App() {
  const [mode, toggleMode] = useDarkMode()
  const theme = React.useMemo(() => createAppTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout toggleMode={toggleMode} mode={mode}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders-list" element={<Order />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}