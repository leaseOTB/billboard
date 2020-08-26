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
} from '@material-ui/core';

import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';

const Layout = ({ children }) => {
  
  const [ route, setRoute ] = useState(null)
  const router = useRouter()

  useEffect(() => {
    setRoute(router.pathname)
    console.log(route)
  }, [route, setRoute])

  return (
    <>
      <Grid container direction='row' justify='space-between'>
        <Hidden smDown>
          <Grid item sm={2}>
            <div
              style={{
                minHeight: '30vh',
                padding: '0em',
                borderRadius: '0 0em 2em 0',
                color: 'white',
                position: 'fixed',
                backgroundColor: '#250A3C',
                overflow: 'hidden',
              }}
            >
              <Grid
                container
                direction='column'
                justfiy='space-between'
                alignItems='flex-start'
              >
                <div
                  style={{
                    margin: '2em 0 4em 2.3em',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                >
                  <Link href='/'>
                    <Grid container direction='row'>
                      <img
                        src='https://storage.googleapis.com/leaseotb-images/aquabox.png'
                        width='30em'
                        aria-label='Lease on the Block'
                      />
                      <div style={{ minWidth: '0em' }} />
                      <Typography
                        variant='h5'
                        color='inherit'
                        style={{ marginLeft: '0em' }}
                      ></Typography>
                    </Grid>
                  </Link>
                </div>
                <br />
                {(route === '/[id]') ? (
                  <div
                    style={{
                      color: 'black',
                      backgroundColor: 'white',
                      padding: '1em 1em',
                      marginLeft: '2em',
                      borderRadius: '1em 0 0 1em',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      boxShadow: '4'
                    }}
                  >
                    <Link href='/'>
                      <Grid container direction='row'>
                        <SearchIcon color='inherit' />
                        <div style={{ minWidth: '0em' }} />
                        <Typography
                          variant='body1'
                          color='textPrimary'
                        ></Typography>
                      </Grid>
                    </Link>
                  </div>
                ) : (
                  <div
                    style={{
                      color: '#250A3C',
                      backgroundColor: '#E86D48',
                      padding: '1em 1em',
                      marginLeft: '2em',
                      borderRadius: '1em 0 0 1em',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      boxShadow: '4'
                    }}
                  >
                    <Link href='/'>
                      <Grid container direction='row'>
                        <SearchIcon color='inherit' />
                        <div style={{ minWidth: '0em' }} />
                        <Typography
                          variant='body1'
                          color='textPrimary'
                        ></Typography>
                      </Grid>
                    </Link>
                  </div>
                )}
                
                <br />
                
              </Grid>
            </div>
          </Grid>
        </Hidden>
        <Grid item container xs={12} md={10}>
          <div style={{ maxWidth: '70%', position: 'absolute', left: '13%', overflowX: 'hidden', overflowY: 'visible'}}>
            {children}
          </div>
        </Grid>
      </Grid>
      <AppBar
        position='fixed'
        color='secondary'
        style={{ top: 'auto', bottom: '0' }}
      >
        <Toolbar variant='dense'>
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
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Layout;
