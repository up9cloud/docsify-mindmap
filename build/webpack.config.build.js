const path = require('path')

const { merge } = require('webpack-merge')

const webpackBaseConfig = require('./webpack.config.base.js')

const env = process.env.NODE_ENV || 'production'
const webpackConfig = merge(webpackBaseConfig, {
  mode: env,
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'docsify-mindmap.min.js'
  }
})

module.exports = webpackConfig
