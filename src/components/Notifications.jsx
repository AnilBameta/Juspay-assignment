import { alpha, Container, Typography, useTheme } from '@mui/material'
import React from 'react'
import NotificationsCard from './NotificationsCard'
import { ActivitiesData, ContactsData, NotificationsData } from '../../config/notifications'

const Notifications = () => {
    const theme = useTheme();
  return (
    <Container sx={{width:'auto',borderLeft: `1px solid ${alpha(theme.palette.text.secondary, 0.2)}`,}}>
    <Typography fontWeight={'bold'} marginBottom={2} marginTop={3}>Notifications</Typography>
    {
        NotificationsData?.map((item) => {
            return <NotificationsCard img={item.img} heading={item.heading} subHeading={item.subHeading}/>
        }) 
    }
    <Typography fontWeight={'bold'} marginBottom={2} marginTop={1}>Activities</Typography>
    {
        ActivitiesData?.map((item) => {
            return <NotificationsCard img={item.img} heading={item.heading} subHeading={item.subHeading}/>
        }) 
    }
     <Typography fontWeight={'bold'} marginBottom={2} marginTop={1}>Contacts</Typography>
    {
        ContactsData?.map((item) => {
            return <NotificationsCard img={item.img} heading={item.heading}/>
        }) 
    }
    </Container>
  )
}

export default Notifications