import {
  Button,
  TextField,
  Grid,
  Modal,
  Paper,
  Typography
} from '@material-ui/core'
import { useState } from 'react'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

function rand() {
  return Math.round(Math.random() * 20) - 10
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

export const Alerts = (index) => {
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <Paper style={modalStyle}>
      <Typography>Sign up for text or email alerts for this address!</Typography>
      <Grid container direction='row' alignItems='center'>
        
      </Grid>
    </Paper>
  )
  return (
    <>
      <div style={{padding: '1em'}}>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item>
            <Button onClick={handleOpen} size='small' variant='outlined'>
              <PhoneIcon style={{marginRight: '.3em'}}/>
              Text Alerts
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleOpen} size='small' variant='outlined'>
              <EmailIcon style={{marginRight: '.3em'}}/>
              Email Alerts
              </Button>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          >
            {body}
          </Modal>     
      </div>
      
    </>
  )
}