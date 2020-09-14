import {
  Typography,
  Grid,
  Paper,
  Divider,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from '@material-ui/core'

import { NewsFeed } from '../components'

const Title = () => {
  return (
    <>
      <img style={{borderRadius: '1em'}} width='100%' src='https://storage.googleapis.com/leaseotb-images/chinatown.jpg'/>
      <Paper elevation={10} style={{marginTop: '-70%', width: '80%', marginLeft: '10%', padding: '2em'}}>
        <Typography variant='h2'>NYC Affordable Housing Community Billboard</Typography>
        <br/>
        <Divider width='50%'/>
      </Paper>
      <br/>
      <Paper elevation={10} style={{marginTop: '5%', width: '70%', marginLeft: '10%', padding: '2em'}}>
        <Typography variant='h6' style={{padding: '.5em'}}>Search registered NYC affordable housing properties and view relevant tenant communities, report issues with the building or landlord, and get the latest news.</Typography>
      </Paper>
    </>
  )
}

const TopBuildings = () => {
  const data = [
    {
      add: '64 VERMILYEA AVENUE',
      zip: '10034',
      bbl: '1022340039'
    },
    {
      add: '111 AUDUBON AVENUE',
      zip: '10032',
      bbl: '1021280029'
    },
    {
      add: '625 WEST 156 STREET',
      zip: '10032',
      bbl: '1021340110'
    }
  ]

  return (
    <Grid container>
      <Typography variant='h3' style={{paddingLeft: '.3em', marginBottom: '1em'}}>Recently Active Properties</Typography>
      {data.map(b => (
        <Grid item xs={6} md={12} xl={6}>
        <Card style={{padding: '0em', margin: '1em', maxWidth: '500px', cursor: 'pointer'}}>
          <CardActionArea href={`/${b.bbl}`}>
            <CardMedia
              component='img'
              src={`https://maps.googleapis.com/maps/api/streetview?location=${b.add}&size=300x300&key=${process.env.GOOGLE_API}`}
              height='140'
              />
            <CardContent>
              <Typography gutterBottom variant='h5'>
                {b.add}
              </Typography>
              <Typography gutterBottom variant='h6'>
                New York City, NY {b.zip}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
      ))}
    </Grid>
  )
}


const Index = () => {
  return (
    <Grid item container direction='row' justify='space-evenly'>
      <Grid item container sm={12} md={6} direction='column'>
        <Title/>
        <br/>
      </Grid>
      <Grid item container sm={12} md={5} direction='column'>
        <Grid item container direction='row' justify='flex-start'>
          <Paper elevation={7} style={{padding: '2em', width: '100%'}}>
            <TopBuildings/>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index
