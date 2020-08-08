import {
  Typography,
} from '@material-ui/core'
import Link from 'next/link'
import Layout from '../components/Layout'
const Custom404 = () => {
  return (
    <Layout>
      <div style={{padding: '3em'}}>
        <Typography variant='h1'>404!</Typography>
        <Link href='/'>return to home</Link>
        <br/>
      </div>
    </Layout>
  )
}

export default Custom404