import * as actionTypes from '../constants/action-types'
import * as urls from '../constants/urls'
import { get } from '../utils/fetcher'

export const defaultAction = (dispatch, getState) => {
  dispatch({ type: actionTypes.DEFAULT_SUCCESS })
  return get({
    url: urls.DEFAULT,
    success: actionTypes.DEFAULT_SUCCESS,
    failure: actionTypes.DEFAULT_FAILURE,
    dispatch
  })
}
