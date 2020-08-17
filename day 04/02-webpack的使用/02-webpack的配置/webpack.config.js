const path = require('path')//依赖node的包

module.exports = {
  entry : './src/main.js',//入口
  output:{//出口
    path:path.resolve(__dirname,'dist'),//动态获取路径
    // 模块.拼接函数(node上下文自带的全局变量,'所选的文件夹名')     //绝对路径
    filename:'bundle.js'
  }
}