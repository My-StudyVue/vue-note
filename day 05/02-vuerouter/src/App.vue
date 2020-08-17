<template>
  <div id="app">
    <!--  router-link（内置组件）——默认渲染为a标签 -->
      <!-- 属性： 
              to-> 跳转路径
              tag->指定组件
              replace->返回键失效，只能使用页面组件
              active-class->修改默认样式的名称  -->
    
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="li" replace active-class="active">关于</router-link> -->

    <!-- <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="li" replace >关于</router-link> -->

    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>

    <!-- router-view——占位 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick(){
      //通过代码的方式修改路径
      //push => pushState
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log("homeClick");
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log("aboutClick");
    }
  },
}
</script>

<style>
  /* .router-link-active{
    color:#f00;
  } */

  .active{
    color: #f00;
  }
</style>
