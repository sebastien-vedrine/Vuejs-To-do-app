import Vuex from 'vuex'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/todos';

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: [],
      todo: {},
      cpt: ''
    },
    actions: {
      loadData({commit}) {
        axios.get(URL)
        .then((response) => {
          commit('updateToDos', response.data)
        })
      },
      getToDo({commit}, id) {
        axios.get(URL+'/'+id)
        .then((response) => {
          commit('GET_TODO', response.data)
        })
      },
      add({commit, state}, text) {
        if (text == '') {
          // Do not add empty todos
          return
        }
        const todo = {
          userId: Math.floor(Math.random() * 10) + 1,
          id: state.cpt+1,
          title: text,
          completed: false
        }
        axios.post(URL, {todo})
        .then((response) => {
          commit('ADD_TODO', todo)
        })
      },
      remove({commit}, todo) {
        axios.delete(URL+'/'+todo.id)
        .then((response) => {
          commit('REMOVE_TODO', todo)
        })
      }
    },
    mutations: {
      updateToDos(state, todos) {
        state.todos = todos
        state.cpt = todos.length
      },
      GET_TODO(state, todoObject) {
        state.todo.id = todoObject.id
        state.todo.userId = todoObject.userId
        state.todo.title = todoObject.title
        state.todo.completed = todoObject.completed
      },
      ADD_TODO (state, todoObject) {
        state.todos.push(todoObject)
        state.cpt++
      },
      REMOVE_TODO (state, todoObject) {
        state.todos.splice(state.todos.indexOf(todoObject), 1)
      },
      toggle (state, todoObject) {
        todoObject.completed = !todoObject.completed
      }
    }
  })
}

export default createStore
