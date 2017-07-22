import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route, IndexRoute} from 'react-router-dom'
import store, { history } from '../store/configureStore'
import App from '../App'

import Home from '../layouts/Home'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route exact path="/" component={Home} />
        </ConnectedRouter>
      </Provider>
    )
  }
}