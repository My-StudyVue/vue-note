export default {
  aChangeInfo (context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('changeInfo')
        console.log(payload)

        resolve('11111')
      }, 1000)
    })
  }
}
