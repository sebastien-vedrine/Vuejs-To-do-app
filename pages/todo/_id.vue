<template>
  <div>
    <v-alert v-if="success" :value="true" type="green">To do modified successfully</v-alert>
    <v-layout row wrap justify-start>
      <v-flex md1 d-flex align-self-center>
        <v-btn flat fab large to="/">
          <v-icon>fas fa-arrow-left</v-icon>
        </v-btn>
      </v-flex>
      <v-flex md10 d-flex align-self-center>
        <h1>ID: {{todo.id}}</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex md6 d-flex>
        <v-select label="UserID" v-model="updateUID" :items="userID" :value="todo.userId"></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex md6 d-flex>
        <v-text-field label="Title" v-model="updateTitle" :value="todo.title"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex md6 d-flex>
        <v-select label="Completed" v-model="updateCompleted" :items="completed" :value="todo.completed"></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex md2 d-flex>
        <v-btn round color="amber" dark @click="updateToDo">Modify</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  data: () => ({
    userID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    completed: [true, false],
    updateUID: '',
    updateTitle: '',
    updateCompleted: '',
    success: false
  }),
  computed: Vuex.mapState(['todo']),
  created() {
    this.$store.dispatch('getToDo', this.$route.params.id)
  },
  methods: {
    validate() {
      if (this.updateUID && this.updateTitle && this.updateCompleted) {
        return true;
      }

      this.errors = [];

      if (!this.updateUID) {
        this.errors.push('User ID required.');
      }
      if (!this.updateTitle) {
        this.errors.push('Todo title required.');
      }
      if (!this.completed) {
        this.errors.push('Please specify wether the todo is completed or not');
      }
    },
    updateToDo() {
      if(this.validate()) {
        const todo = {
          id: this.todo.id,
          userId: this.updateUID,
          title: this.updateTitle,
          completed: this.updateCompleted
        }
        this.$store.dispatch('update', todo)
        this.success = true
      }
    }
  }
}
</script>
