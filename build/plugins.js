const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  new HtmlWebpackPlugin({
    template: 'build/tpl/index.html',
    // 将 script 注入到 body 下面，默认为true
    inject: true
  })
]