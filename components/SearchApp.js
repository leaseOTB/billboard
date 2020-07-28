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
  withStyles,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import CustomSearchBox from './SearchBar';
import CustomCardHits from './CardHits';
import CustomListHits from './ListHits';

let searching = false;

const SearchApp = ({
  searchState,
  resultsState,
  onSearchStateChange,
  createURL,
  indexName,
  searchClient,
}) => {
  const [state, setState] = React.useState({
    checked: true,
  });
  const handleChange = (event) => {
    if (state.checked === true) {
      setState({ checked: false });
    } else {
      setState({ checked: true });
    }
  };

  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

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
        <FormGroup>
          <Typography component='div'>
            <Grid component='label' container alignItems='center' spacing={1}>
              <Grid item>Card</Grid>
              <Grid item>
                <AntSwitch
                  checked={state.checked}
                  onChange={handleChange}
                  name='checked'
                />
              </Grid>
              <Grid item>List</Grid>
            </Grid>
          </Typography>
        </FormGroup>
        <br />
        {!searching ? (
          <>
            <br />
            <Alert severity='info'>
              <AlertTitle>Start Typing to Find Your Building!</AlertTitle>
            </Alert>
            <br />
            {!state.checked ? <CustomCardHits /> : <CustomListHits />}
          </>
        ) : (
          <>
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
