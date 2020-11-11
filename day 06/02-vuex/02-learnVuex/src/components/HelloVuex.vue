<template>
  <div>
    <!-- <h2>{{counter}}</h2> -->
    <h2>{{$store.state.counter}}</h2>
    <!-- <h2>{{$store.state.counter*$store.state.counter}}</h2> -->
    <h2>{{$store.getters.powerCouter}}</h2>
<!-- 必须得写一份computed -->
    <!-- <h1>{{getGreateAgeCout}}</h1> -->
    <h1>{{$store.getters.more20stu}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex'
  // props: {//父子组件用法
  //   counter: Number
  // }
  // computed: {
  //   getGreateAgeCout () {
  //     return this.$store.state.students.filter(s => s.age >= 20).length
  //     // (s => {
  //     //   s.age >= 20 // 返回是个Boolean值
  //     // })
  //   }
  // }
}
</script>

<style scoped>

</style>
