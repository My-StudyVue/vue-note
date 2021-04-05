import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)
// 会执行Vuex.install = Vuex

// 2.创建对象
// new VueRouter({})
const store = new Vuex.Store({
  // 保存状态
  state: {
    counter: 100,
    students: [
      { id: 110, name: 'lyx', age: 19 },
      { id: 111, name: 'lwz', age: 20 },
      { id: 112, name: 'hhh', age: 25 },
      { id: 113, name: 'xxx', age: 3 }
    ]
  },
  mutations: {
    // 处理State,有devtools浏览器插件追踪并检测到相应的State,同步操作
    // 方法
    increment (state) {
      // 自动传入参数state
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
    incrementCount (state, count) {
      state.counter += count
    },
    addStudent (state, stu) {
      state.students.push(stu)
    }
  },
  actions: {
    // 做异步操作,比如后端请求API

  },
  getters: {
    // 计算属性
    powerCouter (state) { // 默认参数state
      return state.counter * state.counter
    },
    more20stu (state) {
      return state.students.filter(s => s.age >= 20)
    },
    more20stuLength (state, getters) {
      // 必须传state
      // return state.students.filter(s => s.age >= 20).length
      return getters.more20stu.length
    },
    moreAgestu (state) {
      // 传参数（返回不确定的值）是需要返回函数
      // return function (age) {
      //   return state.students.filter(s => s.age >= age).length
      // }
      return age => {
        return state.students.filter(s => s.age >= age).length
      }
    }
  },
  modules: {

  }
})

// 3.导出store对象
export default store
