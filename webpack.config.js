var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var templateConfig = require('./html.webpack.config.js');

var config = {
  entry: {
    "cart":'entry/cart.js',
    "cart-iso":'entry/cart-iso.js',
    "hello": "entry/hello.js",
    "async": "entry/async.js"
  },
  output: {
    path: path.join(__dirname, 'public/'),//打包的目标目录
    filename: '[name].js',     //生成的文件名
    publicPath: '/'      //如果资源需要上传到cdn可以使用 http://mycdn/asset/
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, 'resource/')
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
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
    },{
      test: /\.html$/,
      loader: 'html'
    }]
  },
  plugins: [
    commonsPlugin,
     new ExtractTextPlugin('[name].css')
  ]

};

for (var i = 0; i < templateConfig.length; i++) {
  config.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

module.exports = config;