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
  CardContent,
  List
} from '@material-ui/core'

import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PeopleIcon from '@material-ui/icons/People';


const Community = () => {
  return (
    <Grid container style={{padding: '1em'}}>
      <List component='nav'>
        <ListItem button component='a' href='https://www.nmic.org/' target='__none'>
           <ListItemText primary='NMIC' secondary='Provides services to all New York City residents with a focus on those in Northern Manhattan and the South and West Bronx'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='https://www.legalaidnyc.org/' target='__none'>
           <ListItemText primary='Legal Aid NYC' secondary='The Legal Aid Society is built upon one simple but powerful belief: that no New Yorker should be denied the right to equal justice'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='http://housingcourtanswers.org/' target='__none'>
           <ListItemText primary='Housing Court Answers' secondary='Navigate the NYC Housing Courts with FAQs, Housing Court Workshops, and Helpful Resources'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='https://www.justfix.nyc/' target='__none'>
           <ListItemText primary='JustFix NYC' secondary='Request repairs in your apartment, and take your Landlord to Court'></ListItemText>
        </ListItem>
      </List>
    </Grid>
  )
}

export default Community