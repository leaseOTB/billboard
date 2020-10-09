import Link from 'next/link'
import {useRouter} from 'next/router'
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
import PrintIcon from '@material-ui/icons/Print'
import BuildIcon from '@material-ui/icons/Build';

import QRCode from 'qrcode'

import { useEffect, useState, useRef} from 'react'

import {getAllBuildings, getBuildingByBBL} from '../lib/api'

import Custom404 from './404'
import { Layout, Community, Housing, City, ReportingList, ReportChart, NewsFeed, Alerts, Printable} from '../components'

// import PrintProvider, {Print, NoPrint} from 'react-easy-print'


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container style={{padding: '0em'}}>
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

  const Router = useRouter()
  const Images = () => <img src={`https://maps.googleapis.com/maps/api/streetview?location=${STREET_ADDRESS}&size=300x300&key=${process.env.GOOGLE_API}`}></img>
  return (
    <Grid item container direction='row' justify='space-evenly'>
      <Grid item container sm={12} md={6} direction='column'>
        <Grid item container direction='row' justify='flex-start'>
          <Hidden smDown>
            <Grid item md={3}>
              <br/>
              <Images />
            </Grid>
          </Hidden>
          <Grid item sm={12} md={9}>
            <Paper elevation={5}  style={{padding: '1.5em', marginLeft: '0em'}}>
              <Typography variant='h3' color='textPrimary'>
                {STREET_ADDRESS}               
              </Typography>
              <Typography variant='h5' color='textPrimary'>New York, NY {ZIP}</Typography>
              <Typography variant='body1' color='textSecondary'>BBL - {BBL}               
                <Link href={`/print/${BBL}`} >
                  <IconButton style={{marginLeft: '90%'}}  size='small'><PrintIcon/></IconButton>
                </Link>
              </Typography>
              <hr/>
              <Grid container alignItems='center'>
                <a href='https://rentguidelinesboard.cityofnewyork.us/2020-21-apartment-loft-order-52/' target='__blank' style={{textDecoration: 'none', margin: '1em 0 0em 1em'}}>
                  <Chip label={`Rent Regulated`} onClick={() => null} variant='outlined' color='primary' icon={<AttachMoneyIcon />} />
                </a>
                <Chip label={`${INCREASE} YTD HPD Violations`} variant='outlined' icon={<TrendingUpIcon />} style={{margin: '1em 0 0 1em'}}/>
              </Grid>
              <br/>
              <ReportingList/>
            </Paper>
          </Grid>
          <Paper elevation={10} style={{ marginTop: '1em', minWidth: '100%', maxWidth: '100%'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="fullWidth"
              >
                <Tab label="Housing Resources" icon={<HomeIcon />} {...a11yProps(0)} />
                <Tab label="Government Agencies" icon={<LocationCityIcon/>} {...a11yProps(1)} />
                <Tab label="City Services" icon={<BuildIcon/>} {...a11yProps(2)} />
              </Tabs>
            <TabPanel value={value} index={0} >
              <Community/>
            </TabPanel>
            <TabPanel value={value} index={1} >
              <Housing/>
            </TabPanel>
            <TabPanel value={value} index={2} >
              <City/>
            </TabPanel>
            <a href='http://survey.leaseontheblock.care/' target='__blank' style={{textDecoration: 'none'}}>
              <Alert severity="info">
                <AlertTitle style={{marginLeft: '4em'}}>Are you being overcharged?  Click here to find out! </AlertTitle>
              </Alert>
            </a>
          </Paper>
          <br/>
          <br/>
          <br/>
        </Grid>
      </Grid>
      <Grid item sm={12} md={5}>
        <Hidden mdUp>
          <div style={{minHeight: '2em'}}/>
        </Hidden>
        <Paper elevation={5} style={{marginBottom: '-2em', margin: '0em'}}>
          <Grid container alignItems='center' justify='space-between'>
            <Typography variant='h5' style={{padding: '1em', marginBottom: '0em'}}>Property Alerts</Typography>
            <Alerts index={BBL}/>
          </Grid>
          <Alert severity='error'>
            <AlertTitle>9/4/2020 @ 9:22AM - <strong>Rent Strike Reported</strong></AlertTitle>
          </Alert>
          <Alert severity='info'>
            <AlertTitle>9/1/2020 @ 7:00PM - <strong>NMIC Meeting</strong></AlertTitle>
          </Alert>
          <Alert severity='warning'>
            <AlertTitle>8/16/2020 @ 5:31PM - <strong>Electric Service Outage Reported</strong></AlertTitle>
          </Alert>
          <Alert severity='warning'>
            <AlertTitle>6/8/2020 @ 10:12AM - <strong>Tenant Harassment Reported</strong></AlertTitle>
          </Alert>
        </Paper>
          <br/>
        <Paper elevation={5} style={{marginBottom: '-2em', margin: '0em', padding: '1em'}}>
          <NewsFeed/>
        </Paper>
        <br/>
        <br/>
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