import React from 'react'
import ReactDomServer from 'react-dom/server'
import { Provider } from 'react-redux'
import Container from '../containers/Cart'
import reducer from '../reducers/cart'
import configureStore from '../stores/base'

export function getHtml (initState) {
  let store = configureStore(reducer, initState)
  let child = React.createElement(Container)
  let elem = React.createElement(Provider, {store: store}, child)
  return ReactDomServer.renderToString(elem) // <Provider store={store}><Container /></Provider>
}

export function getInitState (initState) {
  let store = configureStore(reducer, initState)
  return store.getState()
}
