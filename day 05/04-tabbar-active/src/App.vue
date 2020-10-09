<template>
  <div id="app">
    <tab-bar>
      <!-- 有几个就插入几个item -->
      <tab-bar-item>
        <!-- 加slot为具名插槽 -->
        <img slot="item-icon" src="./assets/img/tabbar/home.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/profile.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar'
  import TabBarItem from './components/tabbar/TabBarItem.vue'

  export default {
    name: 'App',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  /* @import './assets/css/base.css' */
  @import url('./assets/css/base.css');
</style>
