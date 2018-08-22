<template>
  <ul>
    <li>id: {{$route.params.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.content}}</li>
  </ul>
</template>
<script>
  const allMessageDetails = [
    {id: 1, title: 'message001', content: 'message content001....'},
    {id: 2, title: 'message002', content: 'message content002....'},
    {id: 4, title: 'message004', content: 'message content004....'},
    {id: 5, title: 'message005', content: 'message content005....'},
  ]
  export default {
    data() {
      return {
        messageDetail: {}
      }
    },

    /*
    mounted什么执行? 只在初始化显示时执行一次
    路由组件对象什么时候才创建? 当前请求路由组件对应的path
    路由组件对象什么时候死亡? 当前路由被切换另一个路由去了
    当切换路由时, 只是参数变化了, 而路径没有变, 路由组件对象不会重新创建, mounted()不会重新执行
     */
    mounted () {
      this.showDetail(this.$route)
    },

    watch: {
      $route (val) { // $route的最新值
        this.showDetail(val)
      }
    },

    methods: {
      showDetail (route) {
        // 得到请求参数中的id
        const id = route.params.id*1
        // 找到对应的detail
        this.messageDetail = allMessageDetails.find(md => id===md.id)
      }
    }
  }
</script>
<style>

</style>