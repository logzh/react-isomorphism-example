require('../css/common.css');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Container from '../containers/Cart';
import configureStore from '../stores/cart';

const preloadedState = window.__INITIAL_DATA__;
const store = configureStore(preloadedState);

render(
    <Provider store={store}>
      <Container />
    </Provider>, document.getElementById('app'));
