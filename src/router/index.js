/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'

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
      component: Home,
      children: [
        {
          path: '/home/news',  // 路径最左侧的/代表根路径
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: '/home/message/detail/:id',
              component: MessageDetail
            },
          ]
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },

    // 自动跳转路由
    {
      path: '/',
      redirect: '/about'
    }
  ]
})


/*
vue-router提供了哪些API
 1个函数: VueRouter
 2个对象:
    $route: 代表当前路径相关信息的集合对象(path/params/query/meta)
    $router: 路由器对象(包含多个路由跳转的方法)
 3个组件
    router-link
    router-view
    keep-alive
*/