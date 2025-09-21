import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Notifications from './Notifications'
import { useLocation } from 'react-router-dom'

export default function Layout({ children, toggleMode, mode }) {
  const location = useLocation();
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar toggleMode={toggleMode} mode={mode} />
        <Box component="main" sx={{ p: { xs: 2, md: 4 }, bgcolor: 'background.default', minHeight: 0 }}>
          {children}
        </Box>
      </Box>
        {!location.pathname.includes('orders-list') && <Notifications />}
    </Box>
  )
}