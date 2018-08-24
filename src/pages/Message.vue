<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="index">
        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
        <button @click="pushShow(m.id)">push查看</button>
        <button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
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
    },

    methods: {
      pushShow (id) {
        console.log(this)
        const path = '/home/message/detail/' + id
        this.$router.push(path)
      },

      replaceShow (id) {
        const path = '/home/message/detail/' + id
        this.$router.replace(path)
      }
    }
  }
</script>
<style>

</style>