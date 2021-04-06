import axios from 'axios'

// export function request (config, success, failure) {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         success(res)
//       })
//       .catch(err => {
//         failure(err)
//       })
//   }

// export function request (config) {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config.baseConfig)
//       .then(res => {
//         config.success(res)
//       })
//       .catch(err => {
//         config.failure(err)
//       })
//   }

// export function request (config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
    headers: {}
  })

  // 2.axios的拦截器 --->拦截全局 axios.interceptors
  // 2.1拦截请求
  instance.interceptors.request.use(config => {
    // 发送请求成功
    // console.log(config)
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时，都希望在界面上显示一个请求的图标

    // 3.某些网络请求(比如登录(token))，必须携带一些特殊的信息
    return config // 一定要返回出去
  }
    //   err => {
    //     // 发送请求失败
    //     // console.log(err)
    //   }
  )

  // 2.2拦截响应
  instance.interceptors.response.use(res => {
    // 发送响应成功
    // console.log(res)
    // 需要的数据：res.data
    return res.data
  }, err => {
    // 发送响应失败
    console.log(err)
  })

  // 3.发送真正的网络请求 -----> 本身返回的就是个promise
  return instance(config)
}
