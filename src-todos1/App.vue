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
  import storageUtil from './utils/storageUtil'

  export default {
    data() {
      return {
        todos: []
      }
    },

    mounted () {
      // 从local中读取保存的todos
      setTimeout(() => {
        // 如果没有保存过数据, 读取的结果希望是[]
        this.todos = storageUtil.getTodos()
      }, 1000)
    },

    watch: {
      todos: {
        deep: true, // 深度监视
        /*handler: function (val) {
          // 将todos最新值的json数据保存到local
          storageUtil.saveTodos(val)
        }*/
        handler: storageUtil.saveTodos,
        /*handler: function (todos) {
          localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
        }*/
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