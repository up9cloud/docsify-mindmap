const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.config.base.js')

const env = process.env.NODE_ENV || 'development'

const webpackConfig = merge(webpackBaseConfig, {
  mode: env,
  devServer: {
    watchContentBase: true,
    open: true,
    openPage: '',
    port: 8080,
    hot: true,
    inline: true,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'test', 'index.html'),
      inject: true,
      hash: true
    })
  ],
  devtool: 'inline-source-map'
})

module.exports = webpackConfig
