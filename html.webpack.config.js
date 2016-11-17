var config = [
  {
    title: '首页',
    filename: '../views/index.html',
    template: 'resource/html/index.html',
    chunks: ['vendor', 'hello']
  },
  {
    title: 'cart',
    filename: '../views/async.html',
    template: 'resource/html/async.html',
    chunks: ['vendor', 'async']
  }
];

module.exports = config;
