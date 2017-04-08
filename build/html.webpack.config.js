var path = require('path')
var srcDir = path.resolve(__dirname, '../src/template')
var distDir = path.join(__dirname, '../server/views')

var config = [
  {
    title: 'cart',
    filename: distDir + '/cart.html',
    template: srcDir + '/cart.html',
    chunks: ['vendor', 'cart']
  },
  {
    title: 'cart-iso',
    filename: distDir + '/cart-iso.html',
    template: srcDir + '/cart.html',
    chunks: ['vendor', 'cart-iso']
  }

]

module.exports = config
