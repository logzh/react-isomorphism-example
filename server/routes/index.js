const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async function (req, res, next) {
  const getData1 = function () {
    return axios.get('http://localhost:3000/cgi/user/info')
  }

  const getData2 = function () {
    return axios.get('http://localhost:3000/cgi/mall/cart')
  }

  try {
    let [data1, data2] = await axios.all([getData1(), getData2()])
    res.json({data1: data1.data, data2: data2.data})
  } catch (err) {
    next(err)
  }
  // .then(axios.spread(function (data1, data2) {
  //   Both requests are now complete
  // }))

  // res.render('home', {title: 'home'})
})

router.get('/cart', function (req, res, next) {
  res.render('cart', {title: '非直出', html: '', initData: {carts: []}})
})

router.get('/cart-iso', function (req, res, next) {
  const CartBundle = require('../dist/cart')

  axios.get('http://localhost:3000/cgi/mall/cart').then(function (respone) {
    const carts = respone.data
    let totalCount = 0

    carts.map(function (item) {
      totalCount += parseInt(item.count, 10)
    })

    const props = {carts: carts, totalCount: totalCount, isShow: true}
    const initData = CartBundle.getInitState(props)
    const html = CartBundle.getHtml(props)

    res.render('cart-iso', {title: '同构直出', html: html, initData: initData})
  }).catch(function (err) {
    next(err)
  })
})

module.exports = router
