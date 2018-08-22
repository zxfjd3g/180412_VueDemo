<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="index">
        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        messages: []
      }
    },

    mounted () {
      setTimeout(() => {
        // 获取得到一个messages数组
        const messages = [
          {id: 1, title: 'message001'},
          {id: 2, title: 'message002'},
          {id: 4, title: 'message004'},
          {id: 5, title: 'message005'},
        ]
        this.messages = messages
      }, 1000)
    }
  }
</script>
<style>

</style>