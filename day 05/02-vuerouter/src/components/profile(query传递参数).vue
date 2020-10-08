<template>
  <div>
    <h2>我是档案</h2>
    <p>嚯嚯嚯</p>

    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
export default {
  name:"profile",
  created() {
    console.log('profile created');
    // document.title = "用户"
  },
  destroyed() {
    console.log("profile destroyed");
  },
}
</script>

<style scoped>

</style>