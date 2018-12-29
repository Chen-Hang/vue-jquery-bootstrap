import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home,
      meta:{
        title:"HOME",
        requireAuth:true
      }
    },
    {
      path:"/login",
      name:"Login",
      component:Login,
      meta:{
        title:"登陆"
      }
    }
  ]
})
