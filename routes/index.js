var express = require('express');
var router = express.Router();

require('babel-core/register');
var React = require('react');
var ReactDomServer = require('react-dom/server');

router.get('/', function (req, res, next) {
  var HelloComponent = require('../resource/component/hello/index.jsx');
  var props = req.query || null;
  var html = ReactDomServer.renderToStaticMarkup(//renderToStaticMarkup repalce renderToString
      React.createElement(HelloComponent, props)
  );

  res.render('index', {title: 'Express', html: html, initData:props});
});

router.get('/cart', function (req, res, next) {
  var props = req.query || null;
  res.render('cart', {title: 'Express', html: '', initData:{items: []}});
});

router.get('/cart-iso', function (req, res, next) {
  var Component = require('../resource/component/Cart/index.jsx');
  var props = req.query || null;
  var html = ReactDomServer.renderToStaticMarkup(//renderToStaticMarkup repalce renderToString
      React.createElement(Component, props)
  );

  res.render('cart-iso', {title: 'Express', html: html, initData:{carts: []}});
});

router.get('/async', function (req, res, next) {
  res.render('async', {title: 'Express'});
});

module.exports = router;
