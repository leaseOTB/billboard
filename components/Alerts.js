import {
  Button,
  TextField,
  Grid
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

export const Alerts = (index) => {
  return (
    <>
      <div style={{padding: '1em'}}>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item>
            <Button size='small' variant='outlined'>
              <PhoneIcon style={{marginRight: '.3em'}}/>
              Text Alerts
            </Button>
          </Grid>
          <Grid item>
            <Button size='small' variant='outlined'>
              <EmailIcon style={{marginRight: '.3em'}}/>
              Email Alerts
              </Button>
          </Grid>
        </Grid>     
      </div>
      
    </>
  )
}