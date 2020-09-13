import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import {useRouter} from 'next/router';
import {
  Grid,
  Card,
  Typography,
  AppBar,
  Toolbar,
  Hidden,
  List,
  Button,
  Popper,
  ClickAwayListener,
  IconButton
} from '@material-ui/core'

import { Footer } from './Footer'
import Search from './Search'

const Layout = ({ children }) => {
  
  const [ route, setRoute ] = useState(null)
  const router = useRouter()

  const [open, setOpen] = useState(null)
  const handleClick = (e) => {
    setOpen(open ? null : e.currentTarget)
  }
  const handleClickAway = () => {
    setOpen(false)
  }
  const isOpen = Boolean(open)

  useEffect(() => {
    setRoute(router.pathname)
    console.log(route)
  }, [route, setRoute])

  return (
    <>
      <AppBar position='fixed' color='secondary' style={{zIndex: 1}}>
        <Toolbar style={{padding: '1em'}}>
          <Grid container direction='row' alignItems='center' justify='flex-start'>
            <Link href='/'>
             <>
             <Hidden smDown>
             <img
                src='https://storage.googleapis.com/leaseotb-images/aquabox.png'
                width='30em'
                style={{marginLeft: '2em'}}
                aria-label='Lease on the Block'
              />
             </Hidden>

              <Typography
                variant='h5'
                color='inherit'
                style={{ marginLeft: '1em' }}
                >Community Billboard</Typography>
                </>
            </Link>
            <Grid container direction='row' style={{margin: '1em 0 1em 2em', zIndex: 5, maxWidth: '36em', height: '3em'}}>
              <Search />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <div style={{minHeight: '3em'}}/>
      </Hidden>
      <div style={{ maxWidth: '100%', position: 'absolute', jusitfy: 'center',  paddingTop: '7em', margin: '2em'}}>
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
