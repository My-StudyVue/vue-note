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
    data(){
      return{
        path:'/home/news'
      }
    },
    created(){
      //全局导航守卫——监听路由跳转
      console.log('home created');
      // document.title = "首页"//更改标题栏
    },
    destroyed(){
      console.log('home destroyed');
    },
    //这两个函数只有被保持状态，使用了<keep-alive>标签时才有效
    activated(){
      this.$router.push(this.path)
      // console.log('activated');
    },
    // deactivated(){
    //   console.log('deactivated');
    // },

    //组件内的导航守卫
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    }
    
  }
</script>

<style scoped>

</style>