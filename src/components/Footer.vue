<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/> <!--关联的是checked属性-->
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="clearCompleted">清除已完成任务</button>
  </div>
</template>
<script>
  /*
  模板中读取数据的来源
  1. data: 自己的状态数据
  2. props: 外部的状态数据
  3. computed: 根据已有的数据计算产生的
  */
  export default {
    props: {
      todos: Array,
      checkAllTodos: Function,
      clearCompletedTodos: Function
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

    methods: {
      clearCompleted () {
        if(confirm('确定要删除吗?')) {
          this.clearCompletedTodos()
        }
      }
    }
  }
</script>
<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>