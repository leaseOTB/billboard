import {
  Avatar,
  Button,
  Grid,
  Badge,
  SimpleDialog,
  Typography,
  Paper
} from '@material-ui/core'

import { useState} from 'react'
import LocalDrinkIcon from '@material-ui/icons/LocalDrink'
import FlashOnIcon from '@material-ui/icons/FlashOn'

import PanToolIcon from '@material-ui/icons/PanTool'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
export const ReportingList = () => {
  
  return ( 
    <Paper elevation={0} style={{padding: '.5em'}}>
      <Typography variant='body1' style={{padding: '.5em'}}><strong>Anonymously Report an Issue</strong></Typography>
      <Grid container spacing={0} justify='space-around'>
        <Grid item xs={6} style={{padding: '.5em'}}>
          <Button size='small' variant='outlined'><LocalDrinkIcon style={{paddingRight: '.3em'}}/> Water Service</Button>
        </Grid>
        <Grid item xs={6} style={{padding: '.5em'}}>
          <Button size='small' variant='outlined'><FlashOnIcon style={{paddingRight: '.3em'}}/>Electrical Service</Button>
        </Grid>
        <Grid item xs={6} style={{padding: '.5em'}}>
          <Button size='small' variant='outlined'><PanToolIcon style={{paddingRight: '.3em'}}/>Rent Strike</Button>
        </Grid>
        <Grid item xs={6} style={{padding: '.5em'}}>
          <Button size='small' variant='outlined'><SentimentVeryDissatisfiedIcon style={{paddingRight: '.3em'}}/>Tenant Harassment</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}