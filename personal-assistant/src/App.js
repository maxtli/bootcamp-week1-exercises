import React from 'react'
import Title from './title'
import SearchArea from './searcharea'
import ListArea from './list'

const App = () => (
  <>
    <Title title="To Do List" />
    <SearchArea />
    <ListArea listItems={['List 1', 'List 2', 'List 3', 'List 4', 'List 5']} />
  </>
)

export default App
