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
    <Grid container spacing={4} style={{padding: '1em'}}>
      <List component='nav'>
        <ListItem button component='a' href='https://www1.nyc.gov/site/hpd/index.page' target='__none'>
           <ListItemText primary='NYC Housing Presevation and Development'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='https://hcr.ny.gov/' target='__none'>
           <ListItemText primary='NY Homes and Community Renewal'></ListItemText>
        </ListItem>
      </List>
  </Grid>
  )
}

export default Housing