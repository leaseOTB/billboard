import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';

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
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Affordable Housing Search</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
