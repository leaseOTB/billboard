import React from 'react'
import {
  Grid, 
  Card,
  CardActionArea,
  CardMedia,
  Typography, 
  IconButton,
  Tabs,
  Tab,
  Box,
  Paper,
  CircularProgress,
  Chip,
  Button,
  List,
} from '@material-ui/core'

import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Housing = () => {
  return (
    <Grid container style={{padding: '1em'}}>
      <List component='nav' style={{width: '100%'}}>
        <ListItem button component='a' href='https://hpdonline.hpdnyc.org/HPDonline/provide_address.aspx' target='__none'>
           <ListItemText primary='NYC Housing Presevation and Development'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='https://hcr.ny.gov/' target='__none'>
           <ListItemText primary='NY Homes and Community Renewal'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='https://a836-pts-access.nyc.gov/care/forms/htmlframe.aspx?mode=content/home.htm' target='__none'>
           <ListItemText primary='NYC Department of Finance'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='http://rentguidelinesboard.cityofnewyork.us/' target='__none'>
           <ListItemText primary='NYC Rent Guidelines Board'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='https://resources.hud.gov/#' target='__none'>
           <ListItemText primary='US Department of Housing and Urban Development'></ListItemText>
        </ListItem>
      </List>
    </Grid>
  )
}

export default Housing