import React from 'react';
import { useRouter } from 'next/router'
import {
  Grid,
  TextField,
} from '@material-ui/core';
import {
  connectSearchBox,
} from 'react-instantsearch-dom';


import {SearchIcon} from '@material-ui/icons/Search'

let searching;

const CustomSearch = ({ currentRefinement, isSearchStalled, refine, onClick }) => {
  if (currentRefinement !== null) {
    searching = true
  }
  if (currentRefinement == '') {
    searching = false
  }

  const router = useRouter()
  const handleEnter = (currentRefinement) => {
    router.push(`/search/${currentRefinement}`)
  }

  return (
    <Grid container direction='column' onClick={onClick}>
      <form
        noValidate
        action=''
        role='search'
        style={{ marginTop: '1em', background: 'white', borderRadius: '.5em'}}
      >
        <TextField
          fullWidth
          autoFocus
          type='search'
          size='medium'
          placeholder={'Search by Address, ZIP Code, etc...'}
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
          onSubmit={handleEnter}
        />
      </form>
    </Grid>
  )
}

export const SearchBar = connectSearchBox(CustomSearch)
