<template>
  <div>
    <h1>Sébastien VÉDRINE's To do App</h1>
    <br>
    <v-layout row wrap justify-center>
      <v-flex md6>
        <v-text-field label="Add to do" v-model="createText" @keyup.enter="addToDo(createText)"></v-text-field>
      </v-flex>
      <v-flex md2>
        <v-btn fab dark small color="green" @click="addToDo(createText)">
          <v-icon dark>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <ul>
      <v-container fluid grid-list-sm>
      <li v-for="(todo, index) in todos" :key=todo.id>
        <v-layout row wrap>
          <v-flex xs12 sm8 md8>
            <v-checkbox :checked="todo.completed" :class="todo.completed" :label="todo.title" @change="toggle(todo)"></v-checkbox>
          </v-flex>
          <v-flex xs4 sm2 md2>
            ID: {{todo.id}} &nbsp; UserID: {{todo.userId}}
          </v-flex>
          <v-flex xs8 sm2 md2>
            <v-btn fab dark small color="amber" :href="'/todo/'+todo.id">
              <v-icon>fas fa-edit</v-icon>
            </v-btn>
            <v-btn fab dark small color="red" @click="deleteToDo(todo)">
              <v-icon dark>delete</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-divider v-if="index + 1 < todos.length" :key="`divider-${index}`"></v-divider>
      </li>
      </v-container>
    </ul>
  </div>
</template>

<script>
import Vuex from 'vuex'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      createText: ''
    }
  },
  computed: Vuex.mapState(['todos']),
  created() {
    this.$store.dispatch('loadData')
  },
  methods: {
    addToDo (text) {
      this.$store.dispatch('add', text)
      this.createText = ''
    },
    deleteToDo (todo) {
      this.$store.dispatch('remove', todo)
    },
    ...mapMutations({
      toggle: 'toggle'
    })
  }
}
</script>

<style>
button {
  display: inline;
}
.v-input {
  display: inline;
}
</style>

