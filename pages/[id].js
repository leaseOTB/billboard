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

import QRCode from 'qrcode'

import { useEffect, useState } from 'react'

import {getAllBuildings, getBuildingByBBL} from '../lib/api'

import Custom404 from './404'
import { Layout, Community, Housing, City, ReportingList, ReportChart} from '../components'


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
      generateQR(`http://localhost:3000/${BBL}}`)
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
          <Grid item xs={3}>
            <br/>
            <br/>
            <Images />
          </Grid>
          <Grid item xs={8}>
            <div style={{paddingTop: '1em', marginLeft: '10em'}}>
              <br/>
              <Typography variant='h3' color='textPrimary'>{STREET_ADDRESS}</Typography>
              <hr/>
              <Typography variant='h5' color='textPrimary'>New York, NY {ZIP}</Typography>
              <br/>
              <Grid container alignItems='center' s>
                <Typography variant='body1' color='textPrimary'>BBL - {BBL}</Typography>
                <Chip label={`${INCREASE} YTD in Violations`} variant='outlined' icon={<TrendingUpIcon />} style={{marginLeft: '1em'}}/>
              </Grid>
              <br/>
              <Alert severity="info">
                <AlertTitle>Check Your Lease for Violations!</AlertTitle>
                Submit your lease today for confidential review
              </Alert>
            </div>
          </Grid>
        </Grid>
        <Grid item>
          <Paper elevation={5} style={{ maxWidth: '55em', marginTop: '1em'}}>
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
          </Paper>
        </Grid>
      </Grid>
      <Grid item sm={12} md={5}>
        <Paper elevation={5} style={{marginBottom: '-2em', marginTop: '2em'}}>
          <Alert severity="error" style={{minWidth: '40%'}}>
            <AlertTitle>Water Service Alert for <strong>{STREET_ADDRESS}</strong></AlertTitle>
          </Alert>
          <Typography variant='h5' style={{padding: '1em 1em 0em 1em', marginBottom: '-2em'}}>Reported Issues</Typography>
          <ReportChart/>
          <ReportingList/>
        </Paper>
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