var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('js/vendor.js');

module.exports = {
  entry: {
    "hello": "src/js/hello.js",
    "async": "src/js/async.js"
  },
  output: {
    path: path.join(__dirname, 'public/dist/'),//打包的目标目录
    filename: 'js/[name].js',     //生成的文件名
    publicPath: '/'      //如果资源需要上传到cdn可以使用 http://mycdn/asset/
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'public/')
  },
  module: {
    loaders: [ {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(jpg|png|gif)$/,
      loader: 'url?limit=8192'
    }]
  },
  plugins: [
    commonsPlugin
  ]

};