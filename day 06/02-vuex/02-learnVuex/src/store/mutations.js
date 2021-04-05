import {INCREMENT} from './mutations-type'

export default {// 处理State,有devtools浏览器插件追踪并检测到相应的State,同步操作
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
}
