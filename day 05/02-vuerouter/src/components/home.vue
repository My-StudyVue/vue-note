<template>
  <div>
    <h2>我是首页</h2>
    <p>哈哈哈哈</p>

    <!-- <router-link>什么情况下显示-->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <!-- <router-view>表示在哪渲染，在哪显示 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:"home",
    // created(){
    //   //全局导航守卫——监听路由跳转
    //   document.title = "首页"//更改标题栏
    // }
  }
</script>

<style scoped>

</style>