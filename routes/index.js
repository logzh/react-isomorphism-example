var express = require('express');
var router = express.Router();

require('babel/register');
var React = require('react');
var ReactDomServer = require('react-dom/server');
var helloComponent = require('../component/hello');

/* GET home page. */
router.get('/', function (req, res, next) {

  var props = req.body || null;
  var html = ReactDomServer.renderToString(
      React.createElement(helloComponent, {name:', react render on server side'})
  );

  res.render('index', {title: 'Express', hello: html});
});

module.exports = router;
