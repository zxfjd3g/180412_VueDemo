<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
    <HelloWorld/>
    <hello-world/>
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    data() {
      return {}
    },
    components: {
      HelloWorld
    }
  }
</script>
<style>
  .logo {
    width: 300px;
    height:300px;
  }
</style>