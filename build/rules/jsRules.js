const { resolve } = require('./../utils')

module.exports = [
  {
    test: /\.(j|t)sx?$/,
    include: resolve('src'),
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false, // 不使用 babelrc 文件
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
          plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
            // 使用装饰器 stage-1 阶段行为
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            //类属性编译成赋值表达式，而非 Object.definedProperty 定义
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            '@babel/plugin-syntax-dynamic-import'
          ]
        }
      }
    ]
  }
]