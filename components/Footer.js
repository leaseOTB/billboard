import {
  Grid,
  Typography,
  Toolbar,
  AppBar
} from '@material-ui/core'



export const Footer = () => {
  return (
    <div >
      <AppBar color='secondary' style={{top: 'auto', bottom: 0, position: 'fixed'}}>
        <Toolbar variant='dense'>
          <Grid
            container
            direction='row'
            justify='space-around'
            alignItems='center'
          >
            <a
              href='https://www.leaseontheblock.care'
              target='__none'
              style={{
                textDecoration: 'none',
                color: 'white',
                marginTop: '.5em',
              }}
            >
              <Typography></Typography>
              <img
                width='120em'
                src='https://storage.googleapis.com/leaseotb-images/aqualogo2x.png'
              ></img>
            </a>
            <Typography style={{ cursor: 'pointer' }} variant='body2'>
              Esp&aacute;nol - <strong>English</strong>
            </Typography>
            <a href='https://www.algolia.com/' target='__none'>
              <img
                height='20em'
                src='https://res.cloudinary.com/hilnmyskv/image/upload/q_auto/v1594300044/Algolia_com_Website_assets/images/shared/algolia_logo/search-by-algolia-light-background.svg'
              ></img>
            </a>
          </Grid>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}