// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { defaultAction } from '../actions/app-actions'
import * as componentsPages from '../constants/components-pages'
import AppPage from '../pages/app-page'

export type RouterProps = {
  page: string,
  state: any
}

export const routesMap = {
  DEFAULT_ROUTE: {
    path: '/',
    thunk: defaultAction
  }
}

const Components = {
  AppPage
}

const Router: React.StatelessFunctionalComponent<RouterProps> = (
  props: RouterProps
) => {
  const Page = Components[props.page]
  return <Page />
}

const mapStateToProps = (state): RouterProps => ({
  page: state.Page,
  state
})

export default connect(mapStateToProps)(Router)
