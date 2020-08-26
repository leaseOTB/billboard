import {useEffect, useState} from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import Router from 'next/router'
import { LinearProgress } from '@material-ui/core';

import { Layout } from '../components'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E86D48',
      headerLink: 'black',
      headerLinkHover: '#E86D48',
    },
    secondary: {
      main: '#250A3C',
      light: '#CFEBEC',
      white: 'white',
      black: 'black',
    },
    background: {
      default: 'white',
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Remove the server-side injected CSS.
    Router.events.on('routeChangeStart', () => {
      setIsLoading(true)
    })
    Router.events.on('routeChangeComplete', () => {
      setIsLoading(false)
    })
    Router.events.on('routeChangeError', () => {
      setIsLoading(false)
    })

    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [isLoading, setIsLoading]);


  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Affordable Housing Search</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CssBaseline />
      <Layout>
        {isLoading ? <LinearProgress color='error' style={{marginTop: '1em'}} /> : <Component {...pageProps} />}
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
