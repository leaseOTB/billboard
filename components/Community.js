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
  List,
  Collapse,
} from '@material-ui/core'

import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PeopleIcon from '@material-ui/icons/People';

import {useState} from 'react'

const Community = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Grid container style={{padding: '1em'}}>
      <List component='nav'>
        <ListItem button component='a' href='https://www1.nyc.gov/content/tenantprotection/pages/new-protections-for-rent-regulated-tenants' target='__none'>
           <ListItemText primary={`NYC Mayor's Office  to Protect Tenants`} secondary='What rights do I have with Rent Regulation?'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='https://app.justfix.nyc/en/rh/splash?utm_source=orgsite&utm_medium=productcta&_ga=2.141117362.1005946823.1599428210-161783155.1599087449' target='__none'>
           <ListItemText primary='JustFix NYC' secondary='Request your rent history for free!'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='https://www1.nyc.gov/site/hpd/about/hpd-online.page' target='__none'>
           <ListItemText primary='NYC Housing Preservation & Development' secondary='Check for past and present Housing Preservation Violations.  You might not be the only one having issues in your building!'></ListItemText>
        </ListItem>
        <ListItem button component='a' href='https://whoownswhat.justfix.nyc/en/' target='__none'>
           <ListItemText primary='Who Owns What in NYC' secondary='Find information about your landlord.'></ListItemText>
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary='Free Legal Help For Tenants'></ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Grid container justify='center'>
            <List disablePadding style={{width: '60%'}}>
              <ListItem button divider component='a' href='https://www.legalaidnyc.org/' target='__none'>
                <ListItemText primary='Legal Aid Society'/>
              </ListItem>
              <ListItem button divider component='a' href='https://housingrightsny.org/' target='__none'>
                <ListItemText primary='HousingRights NY'/>
              </ListItem>
              <ListItem button divider component='a' href='https://bka.org/' target='__none'>
                <ListItemText primary='Brooklyn Legal Service'/>
              </ListItem>
            </List>
          </Grid>
        </Collapse>
      </List>
    </Grid>
  )
}

export default Community