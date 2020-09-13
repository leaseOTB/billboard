import {useState} from 'react'
import { connectInfiniteHits } from 'react-instantsearch-dom'
import { List, ListItem, Popper } from '@material-ui/core'

import { SearchPreviewItem } from './SearchPreviewItem'
import { Alert, AlertTitle } from '@material-ui/lab'


const Search = ({ hits }) => {
  const [selected, setSelected] = useState(1)

  const handleListItemHover = (e, index) => {
    setSelected(index)
  }

  if (hits.length === 0 || !hits ) {
    <Alert severity='error'>
      <AlertTitle>No results</AlertTitle>
    </Alert>
  }
  return (
    <List>
      {hits.map((hit, index) => (
        <SearchPreviewItem hit={hit} onMouseOver={(e) => handleListItemHover(e, index)} />
      ))}
    </List>
  )
}

export const SearchPreview = connectInfiniteHits(Search)