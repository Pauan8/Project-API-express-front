import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Route, Switch } from 'react-router-dom'

import netflix from './reducers/netflix';
import { StartScreen } from './pages/StartScreen'
import { SingleCategoryScreen } from './pages/SingleCategoryScreen'
import { CategoriesScreen } from './pages/CategoriesScreen'

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
        <Route path="/type/:type" exact>
          <CategoriesScreen />
        </Route>
        <Route path="/type/:type/:category" exact>
          <SingleCategoryScreen />
        </Route>
      </Switch>
    </Provider>
  )
}
