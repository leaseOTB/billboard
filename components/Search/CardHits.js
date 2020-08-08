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
import SearchCard from './SearchCard';

const CardHits = ({ hits }) => {
  if (hits.length === 0 || !hits)
    return (
      <Alert severity='error'>
        <AlertTitle>No results... Try something else!</AlertTitle>
      </Alert>
    );
  return (
    <Grid container direction='row' spacing={2} justify='space-around'>
      {hits.map((hit) => (
        <SearchCard
          address={hit.STREET_ADDRESS}
          zipCode={hit.ZIP}
          BBL={hit.BBL}
          vi={hit.INC_2020}
          inc={hit.INCREASE}
          key={hit.objectID}
          id={hit._id}
        />
      ))}
    </Grid>
  );
};

const CustomCardHits = connectInfiniteHits(CardHits);
export default CustomCardHits;
