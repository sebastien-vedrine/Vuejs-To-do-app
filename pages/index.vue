<template>
  <div>
    <h1>Sébastien VÉDRINE's To do App</h1>
    <br>
    <v-text-field
      label="Add to do"
      @keyup.enter="addTodo"
    ></v-text-field>
    <ul>
      <li v-for="todo in todos" :key=todo.id>
        <v-checkbox
          :checked="todo.done"
          :class="todo.done"
          :label="todo.text"
          @change="toggle(todo)"
        ></v-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () { return this.$store.state.todos.list }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>

</style>

