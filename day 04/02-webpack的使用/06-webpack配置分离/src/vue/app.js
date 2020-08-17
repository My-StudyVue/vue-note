export default {//导出
  template:`
  <div>
    <h2>{{message}}</h2>
    <button @click="btn">按钮</button>
    <h2>{{name}}</h2>
  </div>
  `,
  data() {
    return {
      message:'媳妇好',
      name:"刘艳鑫"
    }
  },
  methods: {
    btn(){

    }
  },
}