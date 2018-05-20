import * as actionTypes from '../constants/action-types'

export type DefaultState = {
  data: any
}

export const appState = {
  data: null
}

const AppReducer = (state = appState, action) => {
  const { type, data } = action
  switch (type) {
    case actionTypes.DEFAULT:
      return {
        ...state,
        data
      }
    default:
      return state
  }
}

export default AppReducer
