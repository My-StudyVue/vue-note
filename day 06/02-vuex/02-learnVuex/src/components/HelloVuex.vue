<template>
  <div>
    <!-- <h2>{{counter}}</h2> -->
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex'
  // props: {//父子组件用法
  //   counter: Number
  // }
}
</script>

<style scoped>

</style>
