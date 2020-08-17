//1.使用commonjs的模块化规范
const {add,mul} = require('./js/mathUtils.js')
console.log(add(20,30));
console.log(mul(20,30));

//2.使用ES6的模块化的规范
import {name,age,height} from './js/info';
console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')
document.writeln('<h2>媳妇，我错了！</h2>')//往界面写东西 writeln自动换行

//5.图片的处理
//6.es6转化为es5
//7.使用vue进行开发
import Vue from 'vue'
// import App from './vue/app'//导入
import App from './vue/App.vue'

new Vue({
  el:'#app',
  template:`<App/>`,//替换调index.html里的元素
  components:{
    App
  }
})