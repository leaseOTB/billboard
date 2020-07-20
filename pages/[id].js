
import { useRouter } from 'next/router'
import Error from 'next/error'

import Link from 'next/link'

import middleware from '../middleware/middleware'
import { getBuilding } from '../lib/db'

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
  Hidden
} from '@material-ui/core'
import {Alert, AlertTitle} from '@material-ui/lab'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity'

import QRCode from 'qrcode'

import { useEffect, useState } from 'react'
import { Layout, Community, Housing, City} from '../components'


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
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}


const Building = ({data}) => {
  if (!data) return <Error statusCode={404} />;

  const {
    _id, STREET_ADDRESS, BBL, ZIP, INC_2019, INC_2020, INCREASE,
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
      generateQR(`http://localhost:3000/${_id}}`)
    }
  }, [])

  if (!data) {
    return (
      <Layout>
        <div style={{ margin: '20em 10em'}}>
          <CircularProgress />
        </div>
      </Layout>
    )
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const Images = () => <img style={{marginTop: '2em'}} src={`https://maps.googleapis.com/maps/api/streetview?location=${STREET_ADDRESS}&size=300x200&key=${process.env.GOOGLE_API}`}></img>
  return (
    <Layout>
        <Grid item container direction='row' justify='space-between' spacing={4}>
          <Grid item>
            <div style={{padding: '1em'}}>
              <br/>
              <Typography variant='h3' color='textPrimary'>{STREET_ADDRESS}</Typography>
              <hr/>
              <Typography variant='h5' color='textPrimary'>{ZIP}, NY</Typography>
              <br/>
              <Typography variant='body1' color='textPrimary'>BBL {BBL}</Typography>
              <Chip label={`${INC_2020} HPD Violations in 2020`} color='secondary' style={{marginRight: '1em', marginTop: '1em'}}/>
              <Chip label={`${INCREASE} YTD`} variant='outlined' icon={<TrendingUpIcon />} style={{marginTop: '1em'}}/>
            </div>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={5} >
              <Images/>
            </Grid>
          </Hidden>
          <Grid item xs={11}>
            <Paper elevation={10}>
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
              <a style={{textDecoration: 'none'}} href='https://hcr.ny.gov/RRP' target='__blank'>
                <Alert severity="error">
                    <AlertTitle>COVID-19 Alert</AlertTitle>
                    Rent Relief is Available at this Address - <strong> Click to Apply</strong>
                </Alert>
              </a>
            </Paper>
            <br/>
            <br/>
            <br/>

          </Grid>
          {/*
                      <Grid item xs={12} container direction='row'>
            <Typography variant='body1' style={{marginRight: '1em', marginTop: '.5em'}}>Live Here? Register your rent-controlled lease on </Typography>
            <Button href='https://leaseontheblock.care' color='secondary' variant='contained'>
              <img width='110em' src='https://storage.googleapis.com/leaseotb-images/aqualogo2x.png'/>
            </Button>
          </Grid>
          */}
      </Grid>
    </Layout>
  )
} 

export async function getServerSideProps(context) {
  await middleware.apply(context.req, context.res)
  console.log(context.params.id)
  const d = await getBuilding(context.req, context.params.id)
  if (!d) context.res.statusCode = 404
  const data = JSON.parse(JSON.stringify(d))
  return {
    props: {
      data
    },
  };
}

export default Building