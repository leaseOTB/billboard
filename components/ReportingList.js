import {
  Avatar,
  Button,
  Grid,
  Badge,
  SimpleDialog,
  Typography
} from '@material-ui/core'

import { useState} from 'react'

export const ReportingList = () => {
  
  return ( 
    <>
      <Typography variant='h6' style={{padding: '1em 0 1em 1em'}}>Anonymously Report an Issue</Typography>
      <Grid container spacing={0} justify='space-around'>
        <Grid item xs={6} style={{padding: '1em'}}>
          <Button variant='outlined'>Water Issue</Button>
        </Grid>
        <Grid item xs={6} style={{padding: '1em'}}>
          <Button variant='outlined'>Electrical Outage</Button>
        </Grid>
        <Grid item xs={6} style={{padding: '1em'}}>
          <Button variant='outlined'>Rent Strike</Button>
        </Grid>
        <Grid item xs={6} style={{padding: '1em'}}>
          <Button variant='outlined'>Tenant Harassment</Button>
        </Grid>
      </Grid>
    </>
  )
}