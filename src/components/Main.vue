<template>
  <div>
    <h2 v-show="firstView">请输入关键字进行搜索</h2>
    <h2 v-show="loading">请求中....</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-show="users.length">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.header_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

  export default {
    data() {
      return {
        firstView: true, // 是否显示初始界面
        loading: false, // 是否正在请求中
        users: [], // 需要显示的用户列表
        errorMsg: '', // 请求失败后需要显示的错误信息
      }
    },

    mounted () {
      // 订阅消息(search)
      PubSub.subscribe('search', (msg, searchName) => { // 发ajax获取数据
        // 更新状态数据(请求中)
        this.firstView = false
        this.loading = true
        this.users = []
        this.errorMsg = ''

        // 发ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
          .then(response => {
            const result = response.data
            // 如果成功了, 更新状态(成功)
            this.loading = false
            this.users = result.items.map(item => ({
              username: item.login,
              header_url: item.avatar_url,
              url: item.html_url
            }))
          })
          .catch(error => {
            // 如果失败了, 更新状态(失败)
            this.loading = false
            this.errorMsg = '请求失败!'
          })
      })
    }
  }
</script>
<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>