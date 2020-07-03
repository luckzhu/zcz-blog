const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const plugins = require('./plugins')

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: {
    app: resolve('src/index.tsx')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  plugins: [...plugins],
  module: {
    rules: [...jsRules, ...styleRules]
  }
}