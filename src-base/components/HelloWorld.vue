<template>
  <div>
    <h2>{{title}}</h2>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: '第一个Vue组件'
      }
    }
  }
</script>
<style scoped>
  h2 {
    color: red;
  }
</style>