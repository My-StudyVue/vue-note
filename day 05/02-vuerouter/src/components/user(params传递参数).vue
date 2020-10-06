<template>
  <div>
    <h2>我是用户</h2>
    <p>嘻嘻嘻</p>
    <h2>{{userId}}</h2>
    <!-- <h2>{{$route.params.userId}}</h2> -->

    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name:"user(params传递参数)",
    computed:{
      userId(){   
        //$router表示index.js里面配置的router
        //$route表示当前router处于活跃 
        return this.$route.params.userId
      }
    },
    methods:{
      btnClick(){
        //所有的组件都继承来自Vue类的原型
        console.log(this.$router);
        console.log(this.$route);

        // this.test()
        console.log(this.name);
      }
    }
  }
</script>

<style scoped>

</style>