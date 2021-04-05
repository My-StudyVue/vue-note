export default {// 计算属性
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
}
