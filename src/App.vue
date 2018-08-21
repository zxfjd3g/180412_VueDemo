<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :checkAllTodos="checkAllTodos" :clearCompletedTodos="clearCompletedTodos"/>
    </div>
  </div>
</template>
<script>
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'

  export default {
    data() {
      return {
        todos: [
          {title: '吃饭', complete: false},
          {title: '睡觉', complete: true},
          {title: 'coding', complete: false}
        ]
      }
    },

    methods: {
      // 添加todo
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      // 删除指定下标的todo
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },

      // 对所有todo进行全选或全不选
      checkAllTodos (isCheck) {
        this.todos.forEach(todo => {
          todo.complete = isCheck
        })
      },

      // 清除已完成的todo
      clearCompletedTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      }
    },

    components: {
      TodoHeader: Header,
      List,
      TodoFooter: Footer
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