import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Route, Switch } from 'react-router-dom'

import netflix from './reducers/netflix';
import { StartScreen } from './pages/StartScreen'
import { CardList } from './components/CardList'

export const App = () => {
  const reducer = combineReducers({
    netflix: netflix.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact>
          <StartScreen />
        </Route>
        <Route path="/genres/:genre" exact>
          <CardList />
        </Route>
      </Switch>
    </Provider>
  )
}
