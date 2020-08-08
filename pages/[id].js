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
  Hidden
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
  if (!data) return <Custom404 />;

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

  const Images = () => <img style={{marginTop: '2em', position: 'fixed'}} src={`https://maps.googleapis.com/maps/api/streetview?location=${STREET_ADDRESS}&size=300x200&key=${process.env.GOOGLE_API}`}></img>
  return (
    <Layout>
        <Grid item container direction='row' justify='space-between' spacing={4}>
          <Grid item>
            <div style={{padding: '1em'}}>
              <br/>
              <Typography variant='h3' color='textPrimary'>{STREET_ADDRESS}</Typography>
              <hr/>
              <Typography variant='h5' color='textPrimary'>New York, NY {ZIP}</Typography>
              <br/>
              <Typography variant='body1' color='textPrimary'>BBL {BBL}</Typography>
                <Chip label={`${INCREASE} YTD in Violations`} variant='outlined' icon={<TrendingUpIcon />} style={{marginTop: '1em'}}/>
            </div>
          </Grid>
          <Hidden xlDown>
            <Grid item >
              <Images/>
            </Grid>
          </Hidden>
          <Grid item xs={12}>
            <Paper elevation={10} style={{minWidth: '', maxWidth: '80em'}}>
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
      </Grid>
    </Layout>
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