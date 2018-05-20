// @flow
import { Dispatch } from 'react-redux'
import type DefaultState from '../reducers/app-reducer'

export type AppAction = {
  type: string,
  data: any
}

export type AppState = {
  location: any,
  Page: string,
  DefaultState: DefaultState
}

export type AsyncParams = {
  url: string,
  body: any,
  success: string,
  failure: string,
  dispatch: Dispatch,
  shouldRedirect: boolean
}
