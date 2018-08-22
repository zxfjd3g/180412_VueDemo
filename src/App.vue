<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--绑定自定义事件监视-->
      <todo-header @addTodo="addTodo"/>
      <List :todos="todos"/>
      <TodoFooter :todos="todos" :checkAllTodos="checkAllTodos" :clearCompletedTodos="clearCompletedTodos">
        <!--<input type="checkbox" v-model="checkAll" slot="left"/>-->
        <span slot="size">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" slot="right" v-show="completeSize" @click="clearCompleted">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>
<script>
  import PubSub from 'pubsub-js'

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

    computed: {
      // 计算得到完成的数量
      completeSize () {
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },

      checkAll: {
        get () {
          return this.todos.length === this.completeSize && this.completeSize>0
        },
        // 点击checkbox时调用
        set (value) {// value代表checkbox当前是否勾选
          this.checkAllTodos(value)
        }
      }
    },

    mounted () {
      // 从local中读取保存的todos
      setTimeout(() => {
        // 如果没有保存过数据, 读取的结果希望是[]
        this.todos = storageUtil.getTodos()
      }, 1000)

      // 订阅消息(deleteTodo)
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })

      // PubSub.subscribe('deleteTodo', this.deleteTodo)  // 不可以
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
      },

      clearCompleted () {
        if(confirm('确定要删除吗?')) {
          this.clearCompletedTodos()
        }
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