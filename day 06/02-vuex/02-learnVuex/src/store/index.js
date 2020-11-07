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
    counter: 100
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
    }
  },
  actions: {
    // 做异步操作,比如后端请求API

  },
  getters: {

  },
  modules: {

  }
})

// 3.导出store对象
export default store
