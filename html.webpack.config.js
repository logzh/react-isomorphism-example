var config = [
  {
    title: '首页',
    filename: '../views/index.html',
    template: 'resource/html/index.html',
    chunks: ['vendor', 'hello']
  },
  {
    title: 'cart',
    filename: '../views/cart.html',
    template: 'resource/html/cart.html',
    chunks: ['vendor', 'cart']
  },
  {
    title: 'cart-iso',
    filename: '../views/cart-iso.html',
    template: 'resource/html/cart.html',
    chunks: ['vendor', 'cart-iso']
  },
  {
    title: 'async',
    filename: '../views/async.html',
    template: 'resource/html/async.html',
    chunks: ['vendor', 'async']
  }
];

module.exports = config;
