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

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link  to="/home">首页</router-link>
    <router-link  to="/about">关于</router-link>
    <!-- <router-link  :to="'/user/'+userId">用户</router-link> -->

    <!-- <router-link  to="/profile">档案</router-link> -->
    <!-- <router-link  :to="{path:'/profile',query:{name:'lyx',age:19,height:1.58}}">档案</router-link> -->
    <!-- URL: scheme://host:port/path?query#fragment
              协议(http,ftp,tcp)://主机(host,localhost)：端口号(默认为80)/路径(path)?查询(query)#片段 -->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <!-- 被保持路由状态 -->
    <keep-alive>
      <!-- router-view——占位 -->
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId:'liuxinxin'
    }
  },
  methods: {
  //   homeClick(){
  //     //通过代码的方式修改路径
  //     //push => pushState
  //     // this.$router.push('/home')
  //     this.$router.replace('/home')
  //     console.log("homeClick");
  //   },
  //   aboutClick(){
  //     // this.$router.push('/about')
  //     this.$router.replace('/about')
  //     console.log("aboutClick");
  //   },
        userClick(){
          this.$router.push('/user/' + this.userId)
        },
        profileClick(){
          this.$router.push({
            path:'/profile',
            query:{
              name:'lyx',
              age:19,
              height:1.58
            }
          })
        }
  }
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
