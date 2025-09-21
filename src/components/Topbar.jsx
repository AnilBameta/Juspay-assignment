import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box, Tooltip } from '@mui/material'
import { alpha, useTheme } from "@mui/material/styles";
import Hamburger from '../assets/svgs/hamburger.jsx'
import Star from '../assets/svgs/star.jsx'
import Sun from '../assets/svgs/sun.jsx'
import History from '../assets/svgs/history.jsx'
import Notifications from '../assets/svgs/notifications.jsx'
import Search from '../assets/images/Search.svg'
import Searchdark from '../assets/images/Search-dark.svg'

export default function Topbar({ toggleMode, mode }) {
  const theme = useTheme();
  return (
    <AppBar position="sticky" elevation={1} color="transparent" sx={{ boxShadow: 'none', backdropFilter: 'blur(6px)', borderBottom: `1px solid ${alpha(theme.palette.text.secondary, 0.2)}` }}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box display={'flex'} gap={2} alignItems={'center'}>
        <Hamburger />
         <Star />
         <Box display={'flex'} gap={1}>
        <Typography sx={{ opacity: '60%' }}>Dashboard /</Typography>
        <Typography>Default</Typography>
        </Box>
        </Box>
        <Box display={'flex'} gap={2} alignItems={'center'}>
          {/* <SearchBar /> */}
          <img src={mode === 'light' ? Search : Searchdark} alt='Search'/>
          <Box display={'flex'} onClick={() => {mode === 'light' ? toggleMode('dark') : toggleMode('light')}}>
          <Sun />
          </Box>
        <History />
        <Notifications />
        </Box>
      </Toolbar>
    </AppBar>
  )
}