import Vue from 'vue'
import App from './App'

// 对象的解构
// const obj = {
//   name: 'xxx',
//   age: 18
// }
// const {name, age} = obj
// console.log(name, age)

// // 数组的解构
// const names = ['xxx', 'hhh', 'lll']
// // const name1 = names[0]
// // const name2 = names[1]
// // const name3 = names[2]
// const [name1, name2, name3] = names
// console.log(name1, name2, name3)

// 1.axios基本使用

// axios(config) -----> 返回是个promise
// config---->对象类型
// axios({
//   // url: 'httpbin.org/' httpbin.org------> 很多网站的测试
//   url: 'http://123.207.32.32:8000/home/multidata' // 默认get 请求
//   // method: 'post'
// }).then(res => console.log(res))

// axios({
//   // url: 'https://musicapi.leanapp.cn/comment/music?id=186016&limit=1',
//   url: 'https://musicapi.leanapp.cn/comment/music',
//   params: {
//     id: '186016',
//     limit: 1
//   }
// }).then(res => console.log(res))

// 2.axios发送并发请求

// 全局配置 axios.defaults
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000 // 单位毫秒

// axios.all([axios({
//   // baseURL: 'http://123.207.32.32:8000',
//   // timeout: 5,
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   // baseURL: 'http://123.207.32.32:8000',
//   // timeout: 5,
//   url: 'https://musicapi.leanapp.cn/comment/music',
//   params: {
//     id: '186016',
//     limit: 5
//   }
// })])
//   // .then(results => {
//   //   console.log(results)
//   //   console.log(results[0])
//   //   console.log(results[1])
//   // })

//   // axios.spread 可以将数组直接展开
//   .then(axios.spread((res1, res2) => {
//     console.log(res1)
//     console.log(res2)
//   }))

// 3.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instance1({
//   url: '/home/multidata'
// }).then(res => console.log(res))
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => console.log(res))

// const instance2 = axios.create({
//   baseURL: 'https://musicapi.leanapp.cn',
//   timeout: 10000,
//   headers: {}
// })
// instance2({
//   url: '/comment/music',
//   params: {
//     id: '186016',
//     limit: 5
//   }
// }).then(res => console.log(res))

// 4.封装request 模块
import {request} from './network/request'
// import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

// request({
//   baseConfig:{},
//   success:(res) => {

//   },
//   failure:(err) => {

//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
