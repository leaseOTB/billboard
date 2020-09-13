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
      <div style={{padding: '2em 2em 2em 2em'}}>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item>
            <Button variant='outlined'>
              <PhoneIcon style={{marginRight: '.3em'}}/>
              Text Alerts
            </Button>
          </Grid>
          <Grid item>
            <Button variant='outlined'>
              <EmailIcon style={{marginRight: '.3em'}}/>
              Email Alerts
              </Button>
          </Grid>
        </Grid>     
      </div>
      
    </>
  )
}