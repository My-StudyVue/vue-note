<template>
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
    <!-- 固定 -->
    <!-- <img src="../../assets/img/tabbar/home.png" alt="">
    <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  components: {},
  data() {
    return {
      
    };
  },
}
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;/* tabbar一般高度 */
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>