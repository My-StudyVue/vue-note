// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

// const cpn = {//2.传入一个组件对象：1
//   template:`<div>{{message}}</div>`,
//   data() {
//     return {
//       message:'刘艳鑫睡着了'
//     }
//   },
// }

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render : function(createElement){
    //1.普通用法：createElement('标签',{标签的属性},[标签的内容'])
    // return createElement('h2',
    // {class:'box'},
    // ['Hello World',createElement('button',['按钮'])])

    //2.传入一个组件对象：
    // return createElement(cpn)//1
    return createElement(App)
  }
})

// .vue文件中的template----->vue-template-compiler---->render函数
