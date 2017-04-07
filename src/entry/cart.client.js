import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Container from '../containers/Cart'
import configureStore from '../stores/cart'

require('../css/common.css')

const store = configureStore()

render(
  <Provider store={store}>
    <Container />
  </Provider>, document.getElementById('app'))
