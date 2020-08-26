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
  Checkbox,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';

import ImageIcon from '@material-ui/icons/Image'
import ListAltIcon from '@material-ui/icons/ListAlt'

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
        <br />
        <Typography variant='h4' color='textPrimary'>
          Affordable Housing Billboard
        </Typography>
        <div style={{minWidth: '80em'}}>
          <CustomSearchBox />
          <br/>
          <FormGroup>
            <Typography component='body1'>
              <Grid
                component='label'
                container
                alignItems='center'
                spacing={0}
              > 
                <Grid item>
                  <div style={{padding: '.5em'}}>
                    <ImageIcon/>
                  </div>
                </Grid>
                <Grid item>
                  <Switch
                    checked={state.checked}
                    onChange={handleChange}
                    name='checked'
                    color='secondary'
                  />
                </Grid>
                <Grid item>
                  <div style={{padding: '.5em'}}>
                    <ListAltIcon/>
                  </div>
                </Grid>
              </Grid>
            </Typography>
          </FormGroup>
          <br />
          {!state.checked ? <CustomCardHits /> : <CustomListHits />}
          <br />
          <br />
          <br />
        </div>
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
