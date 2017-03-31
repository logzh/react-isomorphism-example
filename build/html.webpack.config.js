var srcDir = './src/template';
var distDir = '../server/views/';
var config = [
  {
    title: 'cart',
    filename: distDir + 'cart.html',
    template: srcDir + '/cart.html',
    chunks: ['vendor', 'cart']
  }
  ,
  {
    title: 'cart-iso',
    filename: distDir + 'cart-iso.html',
    template: srcDir + '/cart.html',
    chunks: ['vendor', 'cart-iso']
  }

];

module.exports = config;
