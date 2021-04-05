<template>
  <div id="app">
    <h2>{{ message }}</h2>

    <h2>-------APP内容--------</h2>
    <!-- <h2>{{counter}}</h2> -->
    <h2>{{ $store.state.counter }}</h2>
    <!--  -->
    <!--  -->
    <!-- <button @click="counter++">+</button>
    <button @click="counter--">-</button> -->
    <!--  -->
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <!--  -->
    <!-- <button @click="addFive">+5</button>
    <button @click="addTen">+10</button> -->
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-------APP内容:getters相关信息--------</h2>
    <!-- <h2>{{$store.state.counter*$store.state.counter}}</h2> -->
    <h2>{{ $store.getters.powerCouter }}</h2>
    <!-- <h1>{{getGreateAgeCout}}</h1> -->
    <h1>{{ $store.getters.more20stu }}</h1>
    <!-- <h1>{{$store.getters.more20stu.length}}</h1> -->
    <h1>{{ $store.getters.more20stuLength }}</h1>
    <h1>{{ $store.getters.moreAgestu(8) }}</h1>

    <h2>-------APP内容:mutations是否使相应式--------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="changeInfo">修改个人信息</button>

    <h2>-------APP内容:modules中内容--------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="changeName">修改名字</button>
    <h1>{{$store.getters.fullName}}</h1>
    <h1>{{$store.getters.fullName2}}</h1>
    <h1>{{$store.getters.fullName3}}</h1>

    <h2>-------vuex内容--------</h2>
    <!-- <hello-vuex :counter="counter"/> -->
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
// export default 导出
// import INCREMENT from './store/mutations-type' //导入

// 普通导出
import {INCREMENT} from './store/mutations-type' // 导入

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
      // this.$store.commit('increment')
      this.$store.commit(INCREMENT)
    },
    subtraction () {
      this.$store.commit('decrement')
    },
    addCount (count) {
      // count ----> 参数(payload ------> 负载，载荷)
      // 1.普通提交风格
      // this.$store.commit('incrementCount', count)

      // 2.特殊提交风格
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent () {
      const stu = {
        id: 114,
        name: 'xm',
        age: 100
      }
      this.$store.commit('addStudent', stu)
    },
    changeInfo () {
      // 同步
      // this.$store.commit('changeInfo')

      // 异步
      // this.$store.dispatch('aChangeInfo', '我是payload')

      // 弊端：如果还有其他参数
      // this.$store.dispatch('aChangeInfo', () => {
      //   console.log('里面以及完成了')
      // })

      // this.$store.dispatch('aChangeInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里面以及完成了')
      //   }
      // })

      this.$store
        .dispatch('aChangeInfo', '我是携带的信息')
        .then(res => {
          console.log('里面完成了提交')
          console.log(res)
        })
    },
    changeName () {
      // 同步
      // this.$store.commit('changeName', '饿了么')

      // 异步
      this.$store.dispatch('aChangeName')
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
</style>
