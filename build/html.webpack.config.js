var srcDir = './src/html';
var distDir = '../server/views/';
var config = [
  {
    title: '首页',
    filename: distDir + 'home.html',
    template: srcDir + '/home.html',
    chunks: []
  },{
    title: 'ejs',
    filename: distDir + 'ejs.html',
    template: srcDir + '/ejs.html',
    chunks: ['vendor', 'ejs-demo']
  },{
    title: 'hello',
    filename: distDir + 'hello.html',
    template: srcDir + '/hello.html',
    chunks: ['vendor', 'hello']
  },
  {
    title: 'cart',
    filename: distDir + 'cart.html',
    template: srcDir + '/cart.html',
    chunks: ['vendor', 'cart']
  },
  {
    title: 'cart2',
    filename: distDir + 'cart2.html',
    template: srcDir + '/cart.html',
    chunks: ['vendor', 'cart2']
  },
  {
    title: 'cart-iso',
    filename: distDir + 'cart-iso.html',
    template: srcDir + '/cart.html',
    chunks: ['vendor', 'cart-iso']
  },
  {
    title: 'async',
    filename: distDir + 'async.html',
    template: srcDir + '/async.html',
    chunks: ['vendor', 'async']
  },{
    title: 'hello-tig',
    filename: distDir + 'hello-tig.html',
    template: srcDir + '/hello-tig.html',
    chunks: ['vendor', 'hello-tig']
  }
];

module.exports = config;
