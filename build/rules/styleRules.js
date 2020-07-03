const { resolve } = require("../utils");
const { cacheLoader, threadLoader } = require('../loaders')

module.exports = [
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      cacheLoader,
      // threadLoader(2), // bug 等待sass-loader fixed
      'css-modules-typescript-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: "[local]__[hash:base64:10]"
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [
              resolve('src/styles')
            ]
          },
        }
      }
    ]
  },
  // antd 样式文件
  {
    test: /\.less$/,
    use: [
      'style-loader',
      cacheLoader,
      'css-loader',
      {
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    ]
  }
]