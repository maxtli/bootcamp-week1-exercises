import React, { useRef } from 'react'
import { Input, Button, ErrLabel } from './styles'

export default ({ setSearch, err, setErr }) => {
  const searchBar = useRef()
  return (
    <form onSubmit={e => {
      e.preventDefault()
      const val = searchBar.current.value
      if (val.length) {
        setSearch(val)
        searchBar.current.value = ''
      } else {
        setErr('search')
      }
    }}
    >
    Search for todos...
      <br />
      <Input ref={searchBar} onInput={setErr('')} />
      <Button type="submit">Search</Button>
      <Button
        type="button"
        onClick={() => { setSearch(''); setErr(''); searchBar.current.value = '' }}
      >
See All
      </Button>
      {err === 'search' ? (
        <ErrLabel>
          <br />
Please enter a search criterion.
        </ErrLabel>
      ) : false}
    </form>
  )
}
