import React, { useState, forwardRef } from 'react';
import { useRouter } from 'next/router'

import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Configure,
  Hits,
  Highlight,
  connectSearchBox,
  connectAutoComplete,
  connectHits
} from 'react-instantsearch-dom'

import SearchIcon from '@material-ui/icons/Search'

import { List, ListItem, Hidden } from '@material-ui/core'

import AutoComplete from './Autocomplete'

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_KEY
)

const VirtalSearchBox = connectSearchBox(() => null)


export const SearchApp = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const onSuggestionSelected = ( _, {suggestion}) => {
    setQuery(suggestion)
    router.push(`/${suggestion.BBL}`)
  }

  const onSuggestionCleared = () => {
    setQuery('')
  }

  return (
    <>
      <Hidden smDown>
        <SearchIcon style={{marginTop: '.3em', marginRight: '.4em'}}/>
      </Hidden>
      <InstantSearch
        searchClient={searchClient}
        indexName={'buildings'}
      >
        <Configure hitsPerPage={5}/>
        <AutoComplete
          onSuggestionSelected={onSuggestionSelected}
          onSuggestionCleared={onSuggestionCleared}
        />
      </InstantSearch>
      <InstantSearch indexName='buildings' searchClient={searchClient}>
        <VirtalSearchBox defaultRefinement={query} />
        {// <Hits hitComponent={Hit}/>
        }
      </InstantSearch>
    </>
  )
}

const Hit = (hit) => {
  return (
    <Highlight attribute="STREET_ADDRESS" hit={hit} />
  )
}