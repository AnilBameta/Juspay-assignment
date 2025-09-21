import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const NotificationsCard = ({img,heading,subHeading}) => {
  return (
    <Box display={'flex'} gap={1} alignItems={'center'} marginBottom={2}> 
        <Avatar src={img} />
        <Box>
        <Typography>{heading}</Typography>
        {subHeading && <Typography sx={{opacity: '40%'}}>{subHeading}</Typography>}
        </Box>
    </Box>
  )
}

export default NotificationsCard