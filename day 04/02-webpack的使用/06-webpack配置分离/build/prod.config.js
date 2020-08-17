//生产特殊东西

const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const WebpackMarge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = WebpackMarge(baseConfig,{
  plugins:[//插件
    new UglifyjsWebpackPlugin()//丑化插件。。。与横幅冲突，发布需要
  ],
})