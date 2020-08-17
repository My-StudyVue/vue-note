//开发特殊东西

const WebpackMarge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = WebpackMarge(baseConfig,{
  devServer:{//服务器——开发
    contentBase:'./dist',//服务的文件夹,默认根目录下
    inline: true,//实时监听
    // port:'',//端口号
    // historyApiFallback:false,//在SPA页面中，依赖HTML5的history模式
  }
})