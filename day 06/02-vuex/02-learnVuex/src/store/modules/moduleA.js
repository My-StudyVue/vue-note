export default {
  state: {
    name: '美团'
  },
  mutations: {
    changeName (state, payload) {
      // state.name = '饿了么'
      state.name = payload
    }
  },
  getters: {
    fullName (state) {
      return `${state.name}1111`
    },
    fullName2 (state, getters) {
      return `${getters.fullName}2222`
    },
    // 模块里面可以有第三个参数 ------> rootState
    fullName3 (state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    // 另一种写法
    // aChangeName ({state,commit,rootState}) {
    aChangeName (context) {
      // 这里的context只能提交到自己模块的mutations
      setTimeout(() => {
        console.log(context)
        context.commit('changeName', '外卖')
      }, 1000)
    }
  }
}
