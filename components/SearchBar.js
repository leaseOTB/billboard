import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
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

let searching = false;
const CustomSearchBox = connectSearchBox(SearchBox);
function SearchBox({ currentRefinement, isSearchStalled, refine }) {
  if (currentRefinement !== null) {
    searching = true;
  }
  if (currentRefinement == '') {
    searching = false;
  }
  return (
    <Grid container direction='row'>
      <form
        noValidate
        action=''
        role='search'
        style={{ width: '70%', marginTop: '2em' }}
      >
        <TextField
          fullWidth
          autoFocus
          type='search'
          size='medium'
          placeholder={'Search by Address, ZIP Code, etc...'}
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
        />
      </form>
    </Grid>
  );
}

export default CustomSearchBox;
