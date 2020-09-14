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
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'


export const Alerts = (index) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div style={{padding: '1em'}}>
      <Button variant="outlined" size='small' onClick={handleClickOpen}>
        <EmailIcon style={{marginRight: '.4em'}}/>Subscribe to Email Alerts
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe to Email Alerts</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address here. Lease on the Block will not share your email with third parties.
          </DialogContentText>
          <TextField
            autoFocus
            color='secondary'
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>   
      </div>
    </>
  )
}