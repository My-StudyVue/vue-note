import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)
// 会执行Vuex.install = Vuex

// 2.创建对象
// new VueRouter({})

const state = {// 响应式
  counter: 100,
  students: [
    { id: 110, name: 'lyx', age: 19 },
    { id: 111, name: 'lwz', age: 20 },
    { id: 112, name: 'hhh', age: 25 },
    { id: 113, name: 'xxx', age: 3 }
  ],
  info: {// 证明响应式
    data: '2021-04-05',
    name: '小明',
    message: '今天天气真好'
  }
}

const store = new Vuex.Store({
  // 保存状态
  state,
  mutations,
  actions,
  getters,
  modules: {// 模块 ---> 多个store对象
    // a:{
    //    state: {},
    //    mutations: {},
    //    actions: {},
    //    getters: {}
    // },
    // b:{},
    // c:{},

    a: moduleA
  }
})

// 3.导出store对象
export default store

// es6语法 对象的解构
const obj = {
  name: 'why',
  age: 18,
  height: 1.88
}

// const name = obj.name
// const age = obj.age
// const height = obj.height
const {name, age, height} = obj// 顺序可换，按照key按需取值
console.log(name, age, height)
