const path = require('path')//依赖node的包
const webpack = require('webpack')//导入webpack----->使用Plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry : './src/main.js',//入口
  output:{//出口
    path:path.resolve(__dirname,'dist'),//动态获取路径
    // 模块.拼接函数(node上下文自带的全局变量,'所选的文件夹名')     //绝对路径
    filename:'bundle.js',
    // publicPath:'dist/'//自动拼接dist
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
        //css-loader 只负责将css文件进行加载
        //style-loader 将模块的导出作为样式添加到 DOM 中
        //使用多个loader时，是从右向左
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
            //less-loader 加载和转译 LESS 文件
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片，小于limit时，会将图片编译成base64字符串的形式
              //。。。。。。。大于limit时，需要将file-loader模块进行加载
              limit: 6000,
              //32位hash名字要求更改,[hash:8]----截取八位，[ext]-----扩展名
              //[ ]----表示变量
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        //排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']//配置文件
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    //alias:别名
    alias:{//指定版本的vue
      'vue$':'vue/dist/vue.esm.js'
    },
    extensions:['.js','.css','.vue'],//省略后缀名
  },
  plugins:[//插件
    new webpack.BannerPlugin('最终属于刘大傻子'),//横幅
    new  HtmlWebpackPlugin({
      template:'index.html'//插入模板
    }),
    // new UglifyjsWebpackPlugin()//丑化插件。。。与横幅冲突，发布需要
  ],
  devServer:{//服务器——开发
    contentBase:'./dist',//服务的文件夹,默认根目录下
    inline: true,//实时监听
    // port:'',//端口号
    // historyApiFallback:false,//在SPA页面中，依赖HTML5的history模式
  }
}