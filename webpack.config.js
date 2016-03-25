var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('js/vendor.js');

module.exports = {
  entry: {
    "hello": "src/js/hello.js"
  },
  output: {
    path: path.join(__dirname, 'public/dist/'),//打包的目标目录
    filename: 'js/[name].js',     //生成的文件名
    publicPath: '/'      //如果资源需要上传到cdn可以使用 http://mycdn/asset/
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],// 配置可以不书写的后缀名
    root: path.join(__dirname, 'public/')
  },
  module: {//各种加载器
    loaders: [ {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(jpg|png|gif)$/,
      loader: 'url?limit=8192'//小于8kb的图片转化为base64，css中其他的图片地址会被体会为打包的地址，此处用到了publicPath
    }]
  },
  plugins: [
    commonsPlugin
  ]

};