<template>
  <div id="app">
    <h2>{{message}}</h2>

    <h2>-------APP内容--------</h2>
    <!-- <h2>{{counter}}</h2> -->
    <h2>{{$store.state.counter}}</h2>
<!--  -->
<!--  -->
    <!-- <button @click="counter++">+</button>
    <button @click="counter--">-</button> -->
<!--  -->
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <h2>-------APP内容:getters相关信息--------</h2>
    <!-- <h2>{{$store.state.counter*$store.state.counter}}</h2> -->
    <h2>{{$store.getters.powerCouter}}</h2>
    <!-- <h1>{{getGreateAgeCout}}</h1> -->
    <h1>{{$store.getters.more20stu}}</h1>
    <!-- <h1>{{$store.getters.more20stu.length}}</h1> -->
    <h1>{{$store.getters.more20stuLength}}</h1>
    <h1>{{$store.getters.moreAgestu(8)}}</h1>

    <h2>-------vuex内容--------</h2>
    <!-- <hello-vuex :counter="counter"/> -->
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  data () {
    return {
      message: 'HelloVuex'
      // counter: 0
    }
  },
  methods: {
    addition () {
      this.$store.commit('increment')
    },
    subtraction () {
      this.$store.commit('decrement')
    }
  },
  // computed: {
  //   getGreateAgeCout () {
  //     return this.$store.state.students.filter(s => s.age >= 20).length
  //     // (s => {
  //     //   s.age >= 20 // 返回是个Boolean值
  //     // })
  //   }
  // },
  components: {
    HelloVuex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
