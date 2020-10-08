<template>
  <div>
    <h2>我是关于</h2>
    <p>嘿嘿嘿嘿</p>
  </div>
</template>

<script>
export default {
  name: "about",
  created() {
    console.log("about created");
    // document.title = "关于"
  },
  destroyed() {
    console.log("about destroyed");
  },
};
</script>

<style scoped>
</style>