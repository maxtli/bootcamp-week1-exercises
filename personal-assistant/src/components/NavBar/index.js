import React from 'react'
import { NavBar, SLink } from './styles'

export default () => (
  <NavBar>
    <SLink to="/">Home</SLink>
    <SLink to="/todos">ToDos</SLink>
  </NavBar>
)
