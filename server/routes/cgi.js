const express = require('express')
const router = express.Router()

router.put('/mall/cart/:id([0-9]+)', function (req, res, next) {
  res.json(require('../json/cart.json'))
})
router.delete('/mall/cart/:id([0-9]+)', function (req, res, next) {
  res.json(require('../json/cart.json'))
})
router.get('/mall/cart', function (req, res, next) {
  res.json(require('../json/cart.json'))
})
router.post('/mall/cart', function (req, res, next) {
  res.json(require('../json/cart.add.json'))
})

router.get('/user/info', function (req, res, next) {
  res.json(require('../json/user.info.json'))
})

module.exports = router
