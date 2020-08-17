import Vue from 'vue'
import App from './App'
import router from './router'//可写   /index.js  ,也可不写

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
