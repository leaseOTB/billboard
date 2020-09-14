import Link from 'next/link'
import { Printable } from '../../components'

import {Button, Grid} from '@material-ui/core'
import ReactToPrint, {useReactToPrint} from 'react-to-print'
import { useEffect, useState, useRef} from 'react'
import {getAllBuildings, getBuildingByBBL} from '../../lib/api'
import Custom404 from './../404'

const Print = ({data}) => {

  if (!data) return <Custom404 />

  const componentRef = useRef()

  console.log(data.BBL)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Grid container direction='row' alignItems='center'>
      <Grid item xs={2}>
        <Link href={`/${data.BBL}`}>
          <Button variant='outlined' style={{margin: '2em'}} >Return to Building Page</Button>
        </Link>
        <Button variant='contained' color='secondary' style={{margin: '2em'}} onClick={handlePrint}>Print out this billboard</Button>
      </Grid>
      <Grid item xs={10} style={{minWidth: '100em', marginTop: '-10em'}}>
        <Printable ref={componentRef} data={data} />
      </Grid>
    </Grid>
  )
}

export async function getStaticProps({params}) {
  const data = await getBuildingByBBL(params.id)
  if (!data) return {props: { data: null}}

  return {
    props: {
      data: data
    }
  }
}

export async function getStaticPaths() {
  const allBBLs = await getAllBuildings()
  return {
    paths: allBBLs?.map((BBL) => `/print/${BBL.BBL}`) || [],
    fallback: true
  }
}

export default Print
