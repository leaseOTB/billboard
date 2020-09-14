import Link from 'next/link'

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
  Button,
  Hidden,
  Badge
} from '@material-ui/core'
import {Alert, AlertTitle} from '@material-ui/lab'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

import { QRCode, useQRCode } from 'react-qrcode'

import React, { useEffect, useState, useRef} from 'react'

import {getAllBuildings, getBuildingByBBL} from '../lib/api'

import { Layout, Community, Housing, City, ReportingList, ReportChart, NewsFeed, Alerts} from './index'

// import PrintProvider, {Print, NoPrint} from 'react-easy-print'

const QR = (props) => {
  const dataUrl = useQRCode(`http://billboard.leaseontheblock.care/${props.BBL}`)

  return ( 
    <img src={dataUrl} style={{margin: '-1em 0 1em 1em'}}/>
  )
}
export class Printable extends React.Component {

  render() {
  const {
    STREET_ADDRESS, BBL, ZIP, INCREASE,
  } = this.props.data


  const Images = () => <img src={`https://maps.googleapis.com/maps/api/streetview?location=${STREET_ADDRESS}&size=300x300&key=${process.env.GOOGLE_API}`}></img>
  return (
    <Grid item container direction='row' justify='space-around'>
      <Grid item container sm={12} md={7} direction='column'>
        <Grid item container direction='row' justify='flex-start'>
          <Grid item xs={12} md={9}>
            <Paper elevation={5}  style={{padding: '1.5em', marginLeft: '0em'}}>
              <br/>
              <Grid container>
                <Grid item xs={8}>
                <Typography variant='h3' color='textPrimary'>{STREET_ADDRESS}</Typography>
                <Typography variant='h5' color='textPrimary'>New York, NY {ZIP}</Typography>
                <Typography variant='body1' color='textSecondary'>BBL - {BBL}</Typography>
                <Grid container alignItems='center'>
                  <Chip label={`Rent Regulated`} variant='default' color='primary' icon={<AttachMoneyIcon />} style={{margin: '1em 0 0em 0em'}}/>
                  <Chip label={`${INCREASE} YTD HPD Violations`} variant='outlined' icon={<TrendingUpIcon />} style={{margin: '1em 0 0 1em'}}/>
                </Grid>
                </Grid>
                <Grid item xs={4}>
                  <QR BBL={BBL}/>
                  <a
                  href='https://www.leaseontheblock.care'
                  target='__none'
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    marginLeft: '1.5em',
                  }}
                  >
                    <img
                      width='150em'
                      src='https://storage.googleapis.com/leaseotb-images/purplelogo2x.png'
                    ></img>
                  </a>
                </Grid>
              </Grid>
              <br/>
              <Alert severity="info">
                <AlertTitle>Anonymously Report Issues & Check Your Lease for Violations!</AlertTitle>
              </Alert>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
  }
}

