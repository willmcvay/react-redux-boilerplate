import * as actionTypes from '../constants/action-types'
import * as urls from '../constants/urls'
import { get } from '../utils/fetcher'

export const defaultAction = (dispatch, getState) => {
  dispatch({ type: actionTypes.DEFAULT })
  return get({
    url: urls.DEFAULT,
    success: actionTypes.DEFAULT,
    failure: actionTypes.DEFAULT,
    dispatch
  })
}
