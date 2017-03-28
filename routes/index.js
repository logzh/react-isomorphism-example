var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res, next) {
  res.render('home', {title: 'home'});
});

router.get('/ejs', function(req, res, next) {

  // 可以同时向后端多个接口发起请求

  axios.get('http://localhost:3000/cgi/user/info').then(function(respone) {
    var user = respone.data;

    res.render('ejs', {
      title: 'ejs 简单前后端分离',
      label: '中途岛前后端分离: 类似php开发，但填充数据交给了前端开发，ejs类模版使得前端更多的优化才有可能，' +
      '但ejs类模版引擎仅仅只是模版引擎',
      todos: [{label: '111'}, {label: '222'}],
      user: user
    });
  }).catch(function(err) {
    next(err)
  })


});

router.get('/hello', function(req, res, next) {
  // require('babel-core/register');
  var React = require('react');
  var ReactDomServer = require('react-dom/server');

  // var HelloComponent = require('../resource/component/Hello/index.jsx');
  var HelloComponent = require('../server/server.hello');
  var props = {name: 'spence', count: 0};
  var html = ReactDomServer.renderToStaticMarkup(//renderToStaticMarkup repalce renderToString
      React.createElement(HelloComponent, props)
  );

  res.render('hello', {title: 'Hello', html: html, initData: props});
});

router.get('/cart', function(req, res, next) {
  res.render('cart', {title: '非直出', html: '', initData: {carts: []}});
});

router.get('/cart-iso', function(req, res, next) {
  // require('babel-core/register');
  var React = require('react');
  var ReactDomServer = require('react-dom/server');

  // var Component = require('../resource/component/Cart/index.jsx');
  var Component = require('../server/server.cart');
  //http://wwq.qq.com/server/mall/goods/100046

  axios.get('http://localhost:3000/cgi/mall/cart').then(function(respone) {
    var carts = respone.data;
    var totalCount = 0;

    carts.map(function(item) {
      totalCount += parseInt(item.count, 10);
    });

    var props = {carts: carts, totalCount: totalCount, isShow: true};

    var html = ReactDomServer.renderToStaticMarkup(//renderToStaticMarkup repalce renderToString
        React.createElement(Component, props)
    );

    res.render('cart-iso', {title: '同构直出', html: html, initData: props});
  }).catch(function(err) {
    next(err)
  })

});

router.get('/async', function(req, res, next) {
  res.render('async', {title: 'Express'});
});

router.get('/hello-tig', function(req, res, next) {

  var React = require('react');
  var ReactDomServer = require('react-dom/server');

  var HelloComponent = require('../public/tig').HelloReact;
  var props = {name: 'spence', count: 0};
  var html = ReactDomServer.renderToStaticMarkup(//renderToStaticMarkup repalce renderToString
      React.createElement(HelloComponent, props)
  );

  res.render('hello-tig', {title: 'Hello', html: html, initData: props});
});

module.exports = router;
