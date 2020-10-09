<template>
  <div>
    <tab-bar>
      <!-- 有几个就插入几个item -->
      <tab-bar-item path="/home" activeColor="blue">
        <!-- 加slot为具名插槽 -->
        <img slot="item-icon" src="../../assets/img/tabbar/home.png" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.png"
        />
        <!-- 属性前面必须加~ -->
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/category.png" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category_active.png"
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/shopcart.png" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/shopcart_active.png"
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="../../assets/img/tabbar/profile.png" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.png"
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// import TabBar from "../tabbar/TabBar";
import TabBar from "components/tabbar/TabBar";
//取别名在 build/webpack.base.conf.js resolve下面alias（27行）
import TabBarItem from "../tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>