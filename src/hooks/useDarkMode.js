import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem('mui-mode')
      return saved || 'light'
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    try { localStorage.setItem('mui-mode', mode) } catch (e) {}
  }, [mode])

  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'))
  return [mode, toggle]
}