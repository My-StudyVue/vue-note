//默认为hash值         可改为history

//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/home.vue'
// import About from "../components/about.vue"
// import User from "../components/user.vue"
//              //路由懒加载
const Home = () => import('../components/home.vue')
const HomeNews = () => import('../components/homeNews.vue')
const HomeMessage = () => import('../components/homeMessage.vue')
const About = () => import('../components/about.vue')
// const User = () => import('../components/user(params传递参数).vue')
const Profile = () => import('../components/profile(query传递参数).vue')

//1.通过Vue.use(插件)——安装插件
Vue.use(VueRouter)

//2.创建VueRouter——映射关系
const routes = [// 抽离出来
  {//设置默认主页
    path:'',
    //redirect重定向
    redirect:'/home'
  },
  {
    //   url:     协议头//host/query
    path:'/home',
    component:Home,
    meta:{//元素
      title:'首页'
    },
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',//子路由不需要+ /
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta:{//元数据
      title:'关于'
    },
  },
  {
    path:'/user/:userId',
    // component:User
    component:() => import('../components/user(params传递参数).vue'),
    meta:{//元素
      title:'用户'
    },
  },
  {
    path:'/profile',
    component:Profile,
    meta:{//元素
      title:'档案'
    },
  }
]
const router = new VueRouter({
  //配置路径和组件之间的映射关系

  // routes:[
        // 抽离
  // ]
  routes,
  mode:'history',//配置为html5的history
  linkActiveClass:'active'//设置全局
})

router.beforeEach((to, from, next) => {
  //从from跳转到to
  // document.title = to.title //to表示路由
  document.title = to.matched[0].meta.title
  //下一步执行
  next()//必须调用
})


//3.将router对象传入到vue实例中
export default router


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

