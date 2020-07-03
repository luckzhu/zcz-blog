const { resolve } = require("../utils");

module.exports = [
  {
    test: /\.scss$/,
    use: [
      'style-loader',
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