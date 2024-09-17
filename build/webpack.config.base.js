module.exports = {
  entry: './src/docsify-mindmap.js',
  externals: [{
    // d3: 'd3',
    markmap: 'markmap',
    // kityminder: 'kityminder-core'
  }, function ({ context, request }, callback) {
    if (request.startsWith('kityminder-core')) {
      return callback(null, 'commonjs ' + request)
    }
    callback();
  },]
}
