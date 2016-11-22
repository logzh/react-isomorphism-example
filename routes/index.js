var express = require('express');
var router = express.Router();
var axios = require('axios');

require('babel-core/register');
var React = require('react');
var ReactDomServer = require('react-dom/server');

router.get('/', function(req, res, next) {
  res.render('home', {title: 'home'});
});

router.get('/normal', function(req, res, next) {
  res.render('normal', {title: 'normal', label:'来自服务器', todos:[{label:'111'}, {label:'222'}]});
});

router.get('/hello', function(req, res, next) {
  var HelloComponent = require('../resource/component/Hello/index.jsx');
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
  var Component = require('../resource/component/Cart/index.jsx');
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

module.exports = router;
