var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  target: 'node',
  devtool: 'source-map',
  entry: {
    'server.hello': 'component/Hello/index.jsx',
    'server.cart': 'component/Cart/index.jsx'
  },
  output: {
    path: path.join(__dirname, '../server'),//打包的目标目录
    filename: '[name].js',     //生成的文件名
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules']
  },
  externals: {
    'jquery': 'jQuery',
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }, {
      test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
      loader: 'url-loader?limit=1024&name=[name].[ext]'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]

};


module.exports = config;