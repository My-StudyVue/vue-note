import Vue from 'Vue'
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

  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

// 3.导出store对象
export default store
