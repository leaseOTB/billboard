import {
  Typography, LinearProgress, Button
} from '@material-ui/core'
import Link from 'next/link'
import Layout from '../components/Layout'
const Custom404 = () => {
  return (
    <div style={{padding: '3em'}}>
      <Typography variant='h1'>404!</Typography>
      <br/>
      <LinearProgress value={20} />
      <br/>
      <Button variant='outlined' style={{textDecoration: 'none'}}>
        <Link href='/'>return to home</Link>
      </Button>
      <br/>
    </div>
  )
}

export default Custom404