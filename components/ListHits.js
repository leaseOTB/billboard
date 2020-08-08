import React from 'react';
import {
  RefinementList,
  connectSearchBox,
  Configure,
  connectHits,
  connectInfiniteHits,
  connectPagination,
  Highlight,
  InstantSearch,
} from 'react-instantsearch-dom';
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardActionArea,
  CircularProgress,
  CardMedia,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Paper,
  Chip,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  withStyles,
  makeStyles,
  TableCell,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import SearchList from './SearchList';

const ListHits = ({ hits }) => {
  if (hits.length === 0 || !hits)
    return (
      <Alert severity='error'>
        <AlertTitle>No results... Try something else!</AlertTitle>
      </Alert>
    );
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  const classes = useStyles();

  return (
    <Grid container direction='row' spacing={2}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Picture</StyledTableCell>
              <StyledTableCell align='right'>Address</StyledTableCell>
              <StyledTableCell align='right'>Zip Code</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hits.map((hit) => (
              <SearchList
                address={hit.STREET_ADDRESS}
                zipCode={hit.ZIP}
                key={hit.objectID}
                id={hit._id}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

const CustomListHits = connectInfiniteHits(ListHits);
export default CustomListHits;
