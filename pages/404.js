import {
  Typography, LinearProgress, Button
} from '@material-ui/core'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <Typography variant='h1'>404!</Typography>
      <br/>
      <LinearProgress value={20} />
      <br/>
      <Button variant='outlined' style={{textDecoration: 'none'}}>
        <Link href='/'>return to home</Link>
      </Button>
      <br/>
    </>
  )
}

export default Custom404