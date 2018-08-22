import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// 声明使用vue插件
Vue.use(VueResource) // 内部给vm和组件对象添加一个$http属性, 利用它可以发ajax请求

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})