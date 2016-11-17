require('../css/style.css');
var React = require('react');
var ReactDOM = require('react-dom');
var HelloComponent = require('../component/hello/index.jsx');

var props = window.__INITIAL_DATA__;

var mountNode = document.getElementById('wwq');
var element = React.createElement(HelloComponent, props);
ReactDOM.render(element, mountNode);
