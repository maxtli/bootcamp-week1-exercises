import React, { useState, useReducer, useRef } from 'react'
import Title from './title'
import SearchArea from './searcharea'
import ListArea from './list'
import GlobalStyle, { Input, Button, ErrLabel } from './styles'

const listReducer = (prevState, payload) => {
  if (payload.mode === 'add') return [...prevState, payload.item]
  return prevState.filter((index, i) => i !== payload.item)
}

const App = () => {
  const [list, setList] = useReducer(listReducer, ['hi', 'item2', 'item3', 'item4', 'item 5', 'hihihiosdahgi'])
  const [search, setSearch] = useState('')
  const [err, setErr] = useState('')
  const addInput = useRef()
  return (
    <>
      <GlobalStyle />
      <Title title="To Do List" />
      <br />
      <SearchArea err={err} setSearch={setSearch} setErr={setErr} />
      <br />
      <div>
        Add Todo
        <br />
        <Input ref={addInput} onInput={() => {setErr('')}} />
        <Button
          type="submit"
          onClick={() => {
            const val = addInput.current.value
            if (val.length === 0 || val === '0') {
              setErr('emptyAdd')
              return false
            }
            if (list.includes(val)) {
              setErr('repeatAdd')
              return false
            }
            setList({ mode: 'add', item: addInput.current.value })
            addInput.current.value = ''
            return false
          }}
        >
Add Todo
        </Button>
        {err === 'emptyAdd' ? <ErrLabel><br />Please enter a ToDo to add.</ErrLabel> : false}
        {err === 'repeatAdd' ? <ErrLabel><br />That ToDo is already in your list.</ErrLabel> : false}
      </div>
      <br />
      {search.length ? <b>Showing: search for '{search}' within ToDos. </b> : false}
      <br />
      <ListArea list={list} setList={setList} search={search} />
    </>
  )
}

export default App
