import React from 'react';
import { render } from 'react-dom';

import Cart2 from '../js/containers/Cart2';

require('../css/common.css');

var props = {carts:[]};
// var mountNode = document.getElementById('app');
// var element = React.createElement(HelloComponent, props);
// ReactDOM.render(element, mountNode);
render(<Cart2 {...props}/>, document.getElementById('app'));