const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
})
