const path = require('path')

const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.config.base.js')

const webpackConfig = merge(webpackBaseConfig, {
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'docsify-mindmap.min.js'
  }
})

module.exports = webpackConfig
