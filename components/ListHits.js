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

  return (
    <Grid container direction='row' spacing={2}>
      {hits.map((hit) => (
        <SearchList
          address={hit.STREET_ADDRESS}
          zipCode={hit.ZIP}
          key={hit.objectID}
          id={hit._id}
        />
      ))}
    </Grid>
  );
};

const CustomListHits = connectInfiniteHits(ListHits);
export default CustomListHits;
