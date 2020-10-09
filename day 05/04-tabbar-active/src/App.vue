<template>
  <div id="app">
    <main-tab-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabBar from './components/mainTabBar/MainTabBar'

  export default {
    name: 'App',
    components:{
      MainTabBar
    }
  }
</script>

<style>
  /* @import './assets/css/base.css' */
  @import url('./assets/css/base.css');
</style>
