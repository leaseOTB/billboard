import {
  Typography,
} from '@material-ui/core'

import Layout from '../components/Layout'
const Custom404 = () => {
  return (
    <Layout>
      <div style={{padding: '3em'}}>
        <Typography variant='h1'>404!</Typography>
        <br/>
        <Typography variant='h3'>Please return from whence you came!</Typography>
      </div>
    </Layout>
  )
}

export default Custom404