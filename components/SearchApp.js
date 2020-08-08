import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import SearchCard from './SearchCard';
import SearchList from './SearchList';
import { InstantSearch } from 'react-instantsearch-dom';
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
  Switch,
  FormGroup,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import CustomSearchBox from './SearchBar';
import CustomCardHits from './CardHits';
import CustomListHits from './ListHits';

// let searching = false;

const SearchApp = ({
  searchState,
  resultsState,
  onSearchStateChange,
  createURL,
  indexName,
  searchClient,
}) => {
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  console.log(searchState);
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

        {searchState !== null && searchState.query.length < 1 ? (
          <>
            <br />
            <Alert severity='info'>
              <AlertTitle>Start Typing to Find Your Building!</AlertTitle>
            </Alert>
            <br />
            <FormGroup>
              <Typography component='div'>
                <Grid
                  component='label'
                  container
                  alignItems='center'
                  spacing={1}
                >
                  <Grid item>Card</Grid>
                  <Grid item>
                    <Switch
                      checked={state.checked}
                      onChange={handleChange}
                      name='checked'
                      color='primary'
                    />
                  </Grid>
                  <Grid item>List</Grid>
                </Grid>
              </Typography>
            </FormGroup>
            <br />
            {!state.checked ? <CustomCardHits /> : <CustomListHits />}
          </>
        ) : (
          <>
            <FormGroup>
              <Typography component='div'>
                <Grid
                  component='label'
                  container
                  alignItems='center'
                  spacing={1}
                >
                  <Grid item>Card</Grid>
                  <Grid item>
                    <Switch
                      checked={state.checked}
                      onChange={handleChange}
                      name='checked'
                      color='primary'
                    />
                  </Grid>
                  <Grid item>List</Grid>
                </Grid>
              </Typography>
            </FormGroup>
            <br />
            {!state.checked ? <CustomCardHits /> : <CustomListHits />}
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
