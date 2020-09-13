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

import QRCode from 'qrcode'

import { useEffect, useState, useRef} from 'react'

import {getAllBuildings, getBuildingByBBL} from '../lib/api'

import Custom404 from './404'
import { Layout, Community, Housing, City, ReportingList, ReportChart, NewsFeed, Alerts} from '../components'


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container style={{padding: '1em'}}>
          {children}
        </Grid>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  }
}


const Building = ({data}) => {
  if (!data) return <Custom404 />

  const {
    STREET_ADDRESS, BBL, ZIP, INCREASE,
  } = data

  const [code , setCode] = useState()
  const [value, setValue] = useState(0)

  const generateQR = async text => {
    try {
      let tempCode = await QRCode.toDataURL(text, { errorCorrectionLevel: 'H' })
      setCode(tempCode)
      console.log(code)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (data) {
      generateQR(`http://billboard.leaseontheblock.care/${BBL}}`)
    }
  }, [])

  if (!data) {
    return (
      <div style={{ margin: '20em 10em'}}>
        <CircularProgress />
      </div>
    )
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const Images = () => <img src={`https://maps.googleapis.com/maps/api/streetview?location=${STREET_ADDRESS}&size=300x300&key=${process.env.GOOGLE_API}`}></img>
  return (
    <Grid item container direction='row' justify='space-around'>
      <Grid item container sm={12} md={7} direction='column'>
        <Grid item container direction='row' justify='flex-start'>
          <Hidden smDown>
            <Grid item md={3}>
              <br/>
              <Images />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={8}>
            <Paper elevation={5}  style={{padding: '1em', marginLeft: '0em'}}>
              <br/>
              <Typography variant='h3' color='textPrimary'>{STREET_ADDRESS}</Typography>
              <Typography variant='h5' color='textPrimary'>New York, NY {ZIP}</Typography>
              <Typography variant='body1' color='textPrimary'>BBL - {BBL}</Typography>
              <hr/>

              <Grid container alignItems='center'>
              <Chip label={`Rent Regulated`} variant='default' color='primary' icon={<AttachMoneyIcon />} style={{margin: '1em 0 0em 1em'}}/>
              <Chip label={`${INCREASE} YTD HPD Violations`} variant='outlined' icon={<TrendingUpIcon />} style={{margin: '1em 0 0 1em'}}/>

              </Grid>
              <br/>
              <ReportingList/>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} md={11}>
          <Paper elevation={10} style={{ maxWidth: '70em', marginTop: '1em'}}>
            <Tabs
              value={value}
              onChange={handleChange} 
              indicatorColor="secondary"
              textColor="secondary"
              variant="fullWidth"
              >
                <Tab label="Community Advocates" icon={<PeopleIcon/>} {...a11yProps(0)} />
                <Tab label="Housing Agencies" icon={<HomeIcon />} {...a11yProps(1)} />
                <Tab label="City Services" icon={<LocationCityIcon/>} {...a11yProps(2)} />
              </Tabs>
            <TabPanel value={value} index={0}>
              <Community/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Housing/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <City/>
            </TabPanel>
            <Alert severity="info">
              <AlertTitle>Check Your Lease for Violations!</AlertTitle>
              Submit your lease today for confidential review
            </Alert>
          </Paper>
        </Grid>
      </Grid>
      <Grid item sm={12} md={5}>
        <Paper elevation={5} style={{marginBottom: '-2em', margin: '0em'}}>
          <Grid container alignItems='center'>
          <Typography variant='h5' style={{padding: '1em 1em 0em 1em', marginBottom: '1em'}}>Recent Alerts</Typography>
          <Alerts index={BBL}/>
          </Grid>
          <Alert severity='error'>
            <AlertTitle>9/4/2020 @ 9:22AM - <strong>Rent Strike Reported</strong></AlertTitle>
          </Alert>
          <Alert severity='warning'>
            <AlertTitle>9/1/2020 @ 7:00PM - <strong>NMIC Meeting</strong></AlertTitle>
          </Alert>
          <Alert severity='info'>
            <AlertTitle>8/16/2020 @ 5:31PM - <strong>Electric Service Outage Reported</strong></AlertTitle>
          </Alert>
          <Alert severity='error'>
            <AlertTitle>6/8/2020 @ 10:12AM - <strong>Tenant Harassment Reported</strong></AlertTitle>
          </Alert>
        </Paper>
          <br/>
        <Paper elevation={5} style={{marginBottom: '-2em', margin: '0em', padding: '1em'}}>
          <NewsFeed/>
        </Paper>
        
      </Grid>
      <Grid item container xs={12} justify='center'>
        <Button variant='outlined'>Print this page</Button>
      </Grid>
    </Grid>
  )
} 

export async function getStaticProps({params}) {
  const data = await getBuildingByBBL(params.id)
  if (!data) return {props: { data: null}}

  return {
    props: {
      data: data
    }
  }
}

export async function getStaticPaths() {
  const allBBLs = await getAllBuildings()
  return {
    paths: allBBLs?.map((BBL) => `/${BBL.BBL}`) || [],
    fallback: true
  }
}

export default Building