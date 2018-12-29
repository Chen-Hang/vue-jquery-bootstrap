// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


import Axios from 'axios'
import qs from "qs"
Vue.prototype.$axios=Axios
// Axios.defaults.baseURL = "http://backstage.iyaa180.com:9501"
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let AUTH_TOKEN = (function () {
  return "ADGN " + localStorage.getItem("token");
})();
//ar instance = Axios.create({}); //创建实例以后修改默认值
Axios.defaults.baseURL = "http://backstage.iyaa180.com:9501"
Axios.defaults.headers.common["app-auth"] = AUTH_TOKEN;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.interceptors.request.use(function (config) {
  let url = config.url;
  if (url.indexOf("login") > -1) {
    localStorage.setItem('token', "");
    config.headers.Authorization = "";
  }
  if (url.indexOf("user") > -1 && url.indexOf("login") < 0) {
    config.headers.Authorization = localStorage.getItem("token");
  }
  //处理post请求
  if (config.method == "post") {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  return Promisr.reject(error)
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.getItem("token")) { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
})




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
