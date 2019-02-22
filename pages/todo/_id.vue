<template>
  <div>
    <h1>{{todo.id}}</h1>
    <h1>{{todo.userId}}</h1>
    <h1>{{todo.title}}</h1>
    <h1>{{todo.completed}}</h1>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  computed: Vuex.mapState(['todo']),
  created() {
    this.$store.dispatch('getToDo', this.$route.params.id)
  }
}
</script>
