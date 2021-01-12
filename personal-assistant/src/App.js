import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import ToDos from './containers/ToDos'
import Greetings from './containers/Greetings'
import GlobalStyle from './styles'

const App = () => (
  <>
    <GlobalStyle />
    <NavBar />
    <Switch>
      <Route path="/todos">
        <ToDos />
      </Route>
      <Route path="/">
        <Greetings />
      </Route>
    </Switch>
  </>
)

export default App
