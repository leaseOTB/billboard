import React from 'react';

import Link from 'next/link';
import PropTypes from 'prop-types';
import SearchCard from './SearchCard';
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
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';

let searching = false;

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
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
};

const CustomSearchBox = connectSearchBox(SearchBox);

const Hits = ({ hits }) => {
  if (hits.length === 0 || !hits)
    return (
      <Alert severity='error'>
        <AlertTitle>No results... Try something else!</AlertTitle>
      </Alert>
    );
  return (
    <Grid container direction='row' spacing={2}>
      {hits.map((hit) => (
        <SearchCard
          address={hit.STREET_ADDRESS}
          zipCode={hit.ZIP}
          key={hit.objectID}
          id={hit._id}
        />
      ))}
    </Grid>
  );
};

const CustomHits = connectInfiniteHits(Hits);

const SearchApp = ({
  searchState,
  resultsState,
  onSearchStateChange,
  createURL,
  indexName,
  searchClient,
}) => {
  return (
    <div style={{ minHeight: '90vh' }}>
      <InstantSearch
        searchClient={searchClient}
        resultsState={resultsState}
        onSearchStateChange={onSearchStateChange}
        searchState={searchState}
        createURL={createURL}
        indexName={indexName}
      >
        <br />
        <Typography variant='h4' color='textPrimary'>
          Affordable Housing Community Billboard
        </Typography>
        <CustomSearchBox />
        <br />
        {!searching ? (
          <>
            <br />
            <Alert severity='info'>
              <AlertTitle>Start Typing to Find Your Building!</AlertTitle>
            </Alert>
            <br />

            <CustomHits />
          </>
        ) : (
          <>
            <CustomHits />

            <br />
          </>
        )}
      </InstantSearch>
    </div>
  );
};

SearchApp.propTypes = {
  seachState: PropTypes.object,
  resultsState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSearchStateChange: PropTypes.func,
  createURL: PropTypes.func,
  indexName: PropTypes.string,
  searchClient: PropTypes.object,
};

export default SearchApp;
