

import LocalDrinkIcon from '@material-ui/icons/LocalDrink'
import FlashOnIcon from '@material-ui/icons/FlashOn'

import PanToolIcon from '@material-ui/icons/PanTool'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import {
  Button,
  TextField,
  Grid,
  Modal,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography
} from '@material-ui/core'
import { useState } from 'react'

const pair = [
  'Water Service',
  'Electrical Service',
  'Rent Strike',
  'Tenant Harassment'
]

const DialogComponent = ({open, index, handleClose}) => {
  return (
    <>

    </>
  )
}

export const ReportingList = () => {

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return ( 
    <Paper elevation={1} style={{padding: '.5em'}}>
      <Typography variant='body1' style={{padding: '.5em'}}><strong>Anonymously Report an Issue</strong></Typography>
      <Grid container spacing={0} justify='space-around'>
        <Grid item xs={6} style={{padding: '.5em'}}>
          <Button size='small' variant='outlined' onClick={handleClickOpen}><LocalDrinkIcon style={{paddingRight: '.3em'}}/> Water Service</Button>
        </Grid>
        <Grid item xs={6} style={{padding: '.5em'}}>
          <Button size='small' variant='outlined' onClick={handleClickOpen}><FlashOnIcon style={{paddingRight: '.3em'}}/>Electrical Service</Button>
        </Grid>
        <Grid item xs={6} style={{padding: '.5em'}}>
          <Button size='small' variant='outlined' onClick={handleClickOpen}><PanToolIcon style={{paddingRight: '.3em'}}/>Rent Strike</Button>
        </Grid>
        <Grid item xs={6} style={{padding: '.5em'}}>
          <Button size='small' variant='outlined' onClick={handleClickOpen}><SentimentVeryDissatisfiedIcon style={{paddingRight: '.3em'}}/>Tenant Harassment</Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Report an Issue</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address and unit number. Lease on the Block will not share your personal data with third parties.
          </DialogContentText>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <TextField
                autoFocus
                color='secondary'
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                autoFocus
                color='secondary'
                margin="dense"
                id="name"
                label="Unit Number"
                type="text"
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            Report
          </Button>
        </DialogActions>
      </Dialog>   
    </Paper>
  )
}