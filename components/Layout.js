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

import {  } from '@material-ui/icons/Search'
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
              {/**
              <img
                src='https://storage.googleapis.com/leaseotb-images/aquabox.png'
                width='30em'
                styyle={{marginLeft: '1em'}}
                aria-label='Lease on the Block'
              /> */}
              <Typography
                variant='h5'
                color='inherit'
                style={{ marginLeft: '1em' }}
                >community billboard</Typography>
            </Link>
            <Grid container direction='row' style={{marginLeft: '5em', zIndex: 5, maxWidth: '40em', height: '3em'}}>
              <Search />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div style={{ maxWidth: '100%', position: 'absolute', jusitfy: 'center',  paddingTop: '4em', margin: '2em'}}>
        {children}
      </div>
        <Grid
          container
          direction='row'
          justify='space-between'
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
    </>
  );
};

export default Layout;
