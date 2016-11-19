import React from 'react';
import { render } from 'react-dom';

import Cart from '../js/containers/Cart';

require('../css/common.css');

var props = {carts:[]};
// var mountNode = document.getElementById('app');
// var element = React.createElement(HelloComponent, props);
// ReactDOM.render(element, mountNode);
render(<Cart {...props}/>, document.getElementById('app'));