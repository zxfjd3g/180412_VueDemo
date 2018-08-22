<template>
  <div>
    <mt-button type="primary" @click="hint" style="width: 100%">测试mint-ui</mt-button>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui'
  export default {
    methods: {
      hint () {
        Toast({
          message: '点击了',
          position: 'bottom',
          duration: 5000
        });
      }
    }
  }
</script>
<style>

</style>