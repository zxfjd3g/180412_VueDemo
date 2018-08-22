/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({ // 配置对象
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    },

    // 自动跳转路由
    {
      path: '/',
      redirect: '/about'
    }
  ]
})