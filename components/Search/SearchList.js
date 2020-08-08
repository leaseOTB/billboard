import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
  makeStyles,
} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#e0e0e0',
    },
    minWidth: '80em'
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: '80em',
  },
});
export default function SearchList(props) {
  const classes = useStyles();

  return (
    // <Grid item xs={12} md={3}>
    //   <Card
    //     style={{
    //       minHeight: '4em',
    //       maxWidth: '30em',
    //       backgroundColor: 'purple',
    //     }}
    //   >
    //     <CardActionArea
    //       href={`/${props.id}`}
    //       style={{
    //         padding: '.5em',
    //       }}
    //     >
    //       <Grid
    //         container
    //         direction='row'
    //         style={{
    //           display: 'flex',
    //           flexDirection: 'row',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //         }}
    //       >
    //         <Grid
    //           item
    //           xs={5}
    //           style={{
    //             maxWidth: '7em',
    //             display: 'flex',
    //             flexDirection: 'row',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //           }}
    //         >
    //           <img
    //             style={{
    //               maxHeight: '7em',
    //               padding: '.2em',
    //             }}
    //             src={`https://maps.googleapis.com/maps/api/streetview?location=${props.address}&size=800x800&key=${process.env.GOOGLE_API}`}
    //           />
    //         </Grid>
    //         <Grid
    //           container
    //           direction='row'
    //           item
    //           xs={7}
    //           justify='center'
    //           alignItems='center'
    //         >
    //           <Typography variant='body1'>{props.address}</Typography>
    //           <br />
    //           <br />
    //         </Grid>
    //       </Grid>
    //     </CardActionArea>
    //   </Card>
    // </Grid>
    <StyledTableRow key={props.id} className={classes.table}>
      <a href={`/${props.BBL}`}>
        <StyledTableCell>{props.address}</StyledTableCell>
        </a>
        <StyledTableCell>{props.zipCode}</StyledTableCell>
        <StyledTableCell>{props.BBL}</StyledTableCell>
        <StyledTableCell>{props.vi}</StyledTableCell>
        <StyledTableCell>{props.inc}</StyledTableCell>
    </StyledTableRow>
  );
}
