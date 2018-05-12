// @flow
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { connectRoutes } from 'redux-first-router'
import { saveState, loadState } from '../utils/local-storage'
import { routesMap } from './router'
import AppReducer from '../reducers/app-reducer'
import PageReducer from '../reducers/page-reducer'

const history = createHistory()
const { reducer, middleware, enhancer } = connectRoutes(history, routesMap)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    location: reducer,
    Page: PageReducer,
    AppState: AppReducer
  }),
  composeEnhancers(enhancer, applyMiddleware(thunk, middleware))
)

export default store
