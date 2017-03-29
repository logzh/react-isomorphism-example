var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var templateConfig = require('./html.webpack.config.js');

var clientConfig = {
  context: path.resolve(__dirname, '..'),
  entry: {
    'cart': 'entry/cart.js',
    'cart-iso': 'entry/cart-iso.js',
    'hello': 'entry/hello.js',
    'hello-tig': 'entry/hello-tig.js',
    'ejs-demo': 'entry/ejs-demo.js',
    'async': 'entry/async.js'
  },
  output: {
    path: path.join(__dirname, '../public/'),//打包的目标目录
    filename: '[name].js',     //生成的文件名
    publicPath: '/'      //如果资源需要上传到cdn可以使用 http://mycdn/asset/
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
      loader: 'url-loader?limit=1024&name=[name].[hash:8].[ext]'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  watch: true,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
        {
          name: 'vendor',
          filename: '[name].js'
        }
    ),
    new ExtractTextPlugin('[name].css'),
  ]

};

for (var i = 0; i < templateConfig.length; i++) {
  clientConfig.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

var serverConfig = {
  watch:true,
  target: 'node',
  devtool: 'source-map',
  entry: {
    'hello': 'component/Hello/index.jsx',
    'cart': 'component/Cart/index.jsx'
  },
  output: {
    path: path.join(__dirname, '../server/dist'),//打包的目标目录
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

module.exports = [clientConfig, serverConfig];