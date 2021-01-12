import React, { useState, useReducer, useRef } from 'react'
import SearchArea from './components/SearchArea'
import ListArea from './components/List'
import {
  Input, Button, ErrLabel, TitleStrip,
} from '../../styles'

const listReducer = (prevState, payload) => {
  if (payload.mode === 'add') return [...prevState, payload.item]
  return prevState.filter((index, i) => i !== payload.item)
}

export default () => {
  const [list, setList] = useReducer(listReducer, [])
  const [search, setSearch] = useState('')
  const [err, setErr] = useState('')
  const addInput = useRef()
  return (
    <>
      <TitleStrip>
        To Do List
      </TitleStrip>
      <br />
      <SearchArea err={err} setSearch={setSearch} setErr={setErr} />
      <br />
      <div>
        Add Todo
        <br />
        <Input ref={addInput} onInput={() => { setErr('') }} />
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
        {err === 'emptyAdd' ? (
          <ErrLabel>
            <br />
Please enter a ToDo to add.
          </ErrLabel>
        ) : false}
        {err === 'repeatAdd' ? (
          <ErrLabel>
            <br />
That ToDo is already in your list.
          </ErrLabel>
        ) : false}
      </div>
      <br />
      {search.length ? (
        <b>
Showing: search for &apos;
          {search}
&apos; within ToDos.
          {' '}
        </b>
      ) : false}
      <br />
      <ListArea list={list} setList={setList} search={search} />
    </>
  )
}
