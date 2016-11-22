var config = [
  {
    title: '首页',
    filename: '../views/home.html',
    template: 'resource/html/home.html',
    chunks: []
  },{
    title: 'ejs',
    filename: '../views/ejs.html',
    template: 'resource/html/ejs.html',
    chunks: ['vendor', 'ejs-demo']
  },{
    title: 'hello',
    filename: '../views/hello.html',
    template: 'resource/html/hello.html',
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
  },{
    title: 'hello-tig',
    filename: '../views/hello-tig.html',
    template: 'resource/html/hello-tig.html',
    chunks: ['vendor', 'hello-tig']
  }
];

module.exports = config;
