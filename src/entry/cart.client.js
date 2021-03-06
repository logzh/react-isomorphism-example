import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Container from '../containers/Cart'
import reducer from '../reducers/cart'
import configureStore from '../stores/base'

const store = configureStore(reducer)

require('../css/common.css')

render(
  <Provider store={store}>
    <Container />
  </Provider>, document.getElementById('app'))
