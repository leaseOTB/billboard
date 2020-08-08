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
  const StyledTableCell = withStyles(() => ({
    head: {
      backgroundColor: '#250A3C',
      color: 'white',
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const useStyles = makeStyles({
    table: {
      maxWidth: '80em',
    },
  });
  const classes = useStyles();

  return (
    <Grid container direction='row'>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Zip Code</StyledTableCell>
              <StyledTableCell>BBL</StyledTableCell>
              <StyledTableCell>2020 Housing Violations</StyledTableCell>
              <StyledTableCell>Housing Violations Increase</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hits.map((hit) => (
              <SearchList
                address={hit.STREET_ADDRESS}
                zipCode={hit.ZIP}
                BBL={hit.BBL}
                vi={hit.INC_2020}
                inc={hit.INCREASE}
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
