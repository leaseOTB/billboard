import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits, Highlight, Index, Configure } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_KEY
)

const SearchQuery = ({data}) => {
  
  const { refinement } = data
  
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        searchState={refinement}
        indexName='buildings'
        >
          <SearchPreview />
        </InstantSearch>
    </>
  )
}

export async function getServerSideProps({params}) {
  const data = params.ref

  if (!data) return {props: { data: null}}
  return {
    props: {
      data: data
    }
  }
}

export default SearchQuery
