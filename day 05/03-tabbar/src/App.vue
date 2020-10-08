<template>
  <div id="app">
    <div id="tab-bar">
      <div  class="tab-bar-item">首页</div>
      <div  class="tab-bar-item">分类</div>
      <div  class="tab-bar-item">购物车</div>
      <div  class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  /* @import './assets/css/base.css' */
  @import url('./assets/css/base.css');

  #tab-bar{
    display: flex;
    /* justify-content: space-around; */
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 阴影 */
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .8);
  }
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;/* tabbar一般高度 */
  }
</style>
