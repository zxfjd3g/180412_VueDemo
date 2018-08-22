<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="index"
          :todo="todo" :deleteTodo="deleteTodo" :index="index"/>
  </ul>
</template>
<script>
  import Item from './Item.vue'

  export default {
    // 组件对象可以理解为一个小的vm对象, 也就是this
    // 接收的props属性就会自动成功组件对象的属性(只读)
    props: ['todos', 'deleteTodo'], // 指定了属性名

    components: {
      Item
    }
  }
</script>
<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>