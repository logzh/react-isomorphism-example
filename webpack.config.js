var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('js/vendor.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    "hello": "js/hello.js",
    "async": "js/async.js"
  },
  output: {
    path: path.join(__dirname, 'public/'),//打包的目标目录
    filename: 'js/[name].js',     //生成的文件名
    publicPath: '/'      //如果资源需要上传到cdn可以使用 http://mycdn/asset/
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'resource/')
  },
  module: {
    loaders: [ {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
    },  {
      test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
      loader: 'url?limit=1024&name=[hash].[ext]'
    }]
  },
  plugins: [
    commonsPlugin,
    new ExtractTextPlugin('[name].css')
  ]

};