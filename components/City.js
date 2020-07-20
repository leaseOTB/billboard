import React from 'react'
import {
  Grid, 
  Card, 
  Typography, 
  IconButton,
  Tabs,
  Tab,
  Box,
  Paper,
  CircularProgress,
  Chip,
  Button
} from '@material-ui/core'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import WhatshotIcon from '@material-ui/icons/Whatshot'

const City = () => {
  return (
    <Grid container spacing={4} style={{padding: '1em'}}>
    <Grid item xs={6} container direction='row' spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h6' style={{marginLeft: '0em'}}>Emergency Services</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant='outlined' href='https://www.facebook.com/inwoodfd/' target='__none'>
          <WhatshotIcon style={{fontSize: '3em', marginRight: '.5em'}} />
          Fire Department
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant='outlined' href='https://data.cityofnewyork.us/Health/Hospitals/833h-xwsx/' target='__none'>
          <LocalHospitalIcon style={{fontSize: '3em', marginRight: '.5em'}}  />
          Hospital
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={6} container direction='row' spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h6'>Social Services</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button  variant='outlined' href='https://access.nyc.gov/' target='__none'>
          <img width='50em' style={{marginRight: '1em'}} src='https://a069-access.nyc.gov/hrapartners/Images/accessnyc_lock.png' />
          Access NYC
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant='outlined' href='https://access.nyc.gov/' target='__none'>
          <img width='50em' style={{marginRight: '1em'}} src='https://a069-access.nyc.gov/accesshra/static/media/landingpage_HRAicon.1f96f614.png' />
          Access HRA
        </Button>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default City