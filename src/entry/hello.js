require('../css/style.css');
var React = require('react');
var ReactDOM = require('react-dom');
var HelloComponent = require('../component/Hello/index.jsx');//TIG.HelloReact

var props = window.__INITIAL_DATA__;

var mountNode = document.getElementById('app');
var element = React.createElement(HelloComponent, props);
ReactDOM.render(element, mountNode);
