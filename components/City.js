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
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Button
} from '@material-ui/core'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import WhatshotIcon from '@material-ui/icons/Whatshot'

const City = () => {
  return (
    <Grid container style={{padding: '1em'}} alignItems='flex-start'>
      <Grid item xs={6} container direction='row'>
        <Typography variant='h6' style={{marginLeft: '1em', marginTop: '1em'}}>Emergency Services</Typography>
          <List component='nav'>
            <ListItem button component='a' href='https://www.facebook.com/inwoodfd/' target='__none'>
              <ListItemAvatar><Avatar><WhatshotIcon/></Avatar></ListItemAvatar>
              <ListItemText primary='Fire Department'></ListItemText>
            </ListItem>
            <ListItem button component='a' href='https://data.cityofnewyork.us/Health/Hospitals/833h-xwsx/' target='__none'>
              <ListItemAvatar><Avatar><LocalHospitalIcon/></Avatar></ListItemAvatar>
              <ListItemText primary='Hospital'></ListItemText>
            </ListItem>
          </List>
      </Grid>
      <Grid item xs={6} container direction='row'>
      <Typography variant='h6' style={{marginLeft: '1em', marginTop: '1em'}}>Social Services</Typography>
          <List component='nav'>
            <ListItem button component='a' href='https://access.nyc.gov/' target='__none'>
              <ListItemAvatar><Avatar src='https://a069-access.nyc.gov/hrapartners/Images/accessnyc_lock.png'/></ListItemAvatar>
              <ListItemText primary='Access NYC'></ListItemText>
            </ListItem>
            <ListItem button component='a' href='https://a069-access.nyc.gov/accesshra/' target='__none'>
              <ListItemAvatar><Avatar src='https://a069-access.nyc.gov/accesshra/static/media/landingpage_HRAicon.1f96f614.png'/></ListItemAvatar>
              <ListItemText primary='Access HRA'></ListItemText>
            </ListItem>
          </List>
      </Grid>
    </Grid>
  )
}

export default City