<template>
  <div>
    <h2 v-if="!repoUrl">loading...</h2>
    <p v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></p>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        repoUrl: '',
        repoName: ''
      }
    },

    mounted () {
      // 使用vue-resource发ajax请求
      const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
      /*this.$http.get(url).then(
        response => {
          const result = response.data
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        },
        response => {
          alert('请求失败!')
        }
      )*/

      // 使用axios发ajax请求
      axios.get(url).then(
        response => {
          const result = response.data
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        }
      ).catch(error => {
        alert('请求失败222!')
      })
    }
  }
</script>
<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>