<template>
  <div>
    <h2>我是用户</h2>
    <p>嘻嘻嘻</p>
    <h2>{{userId}}</h2>
    <!-- <h2>{{$route.params.userId}}</h2> -->
  </div>
</template>

<script>
  export default {
    name:"user(params传递参数)",
    computed:{
      userId(){   
        //$route表示index.js里面配置的router
        //$router表示当前router处于活跃 
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>