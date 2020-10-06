import Vue from 'vue'
import App from './App'
import router from './router'//可写   /index.js  ,也可不写

Vue.config.productionTip = false

// Vue.prototype.test = function () {
//   console.log('test');
// }
Vue.prototype.name = "lyx"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

console.log(router);
