import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-type'
// 1.安装插件
Vue.use(Vuex)
// 会执行Vuex.install = Vuex

// 2.创建对象
// new VueRouter({})

const moduleA = {
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

const store = new Vuex.Store({
  // 保存状态
  state: {// 响应式
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
  },
  mutations: {// 处理State,有devtools浏览器插件追踪并检测到相应的State,同步操作
    // 方法

    // increment (state) {
    //   // 自动传入参数state
    //   state.counter++
    // },
    [INCREMENT] (state) {
      // 自动传入参数state
      state.counter++
    },

    decrement (state) {
      state.counter--
    },
    // 1.普通提交风格，参数传过来----->数值
    // incrementCount (state, count) {
    //  state.counter += count
    // },
    // 2.特殊提交风格,参数传过来----->对象
    incrementCount (state, payload) {
      // console.log(payload)//对象
      state.counter += payload.count
    },
    addStudent (state, stu) {
      state.students.push(stu)
    },
    changeInfo (state) {
      state.info.name = '张伟'

      // 异步实验----->错误代码，不能在这进行异步操作
      // setTimeout(() => {
      //   state.info.name = '张伟'// devtools 不能跟踪到异步操作
      // }, 1000)

      // 增加属性
      // view不显示-----> 没有在state中初始化
      // state.info['address'] = '上海'
      // 修改 ------> Vue.set(需要修改的obeject/Array，key,value)添加到响应式中
      // Vue.set(state.info, 'address', '上海')

      // 删除属性
      // view不显示-----> 没有在state中初始化
      // delete state.info.message
      // 修改 ------> Vue.delete(需要修改的obeject/Array，key,value)删除到响应式中
      // Vue.delete(state.info, 'message')
    }
  },
  actions: {// 做异步操作,比如后端请求API,跟mutations用法相似
    // aChangeInfo (context, payload) {
    //   // 自动传入 context ---> 上下文
    //   setTimeout(() => {
    //     context.commit('changeInfo')
    //     // console.log(payload)
    //     console.log(payload.message)
    //     payload.success()
    //   }, 1000)
    // }

    // 代码改进
    aChangeInfo (context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('changeInfo')
          console.log(payload)

          resolve('11111')
        }, 1000)
      })
    }
  },
  getters: {// 计算属性
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
