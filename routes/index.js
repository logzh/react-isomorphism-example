var express = require('express');
var router = express.Router();

require('babel-core/register');
var React = require('react');
var ReactDomServer = require('react-dom/server');
var HelloComponent = require('../resource/component/hello/index.jsx');

/* GET home page. */
router.get('/', function (req, res, next) {

  var props = req.query || null;
  var html = ReactDomServer.renderToStaticMarkup(//renderToStaticMarkup repalce renderToString
      React.createElement(HelloComponent, props)
  );

  res.render('index', {title: 'Express', html: html, initData:props});
});

router.get('/async', function (req, res, next) {

  res.render('async', {title: 'Express'});
});

module.exports = router;
