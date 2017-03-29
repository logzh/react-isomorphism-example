import React from 'react';
import ReactDOM from 'react-dom';

import Cart from '../js/containers/Cart';

require('../css/common.css');

var props = window.__INITIAL_DATA__;

var mountNode = document.getElementById('app');
// var element = React.createElement(Cart, props);
ReactDOM.render(<Cart {...props}/>, mountNode);