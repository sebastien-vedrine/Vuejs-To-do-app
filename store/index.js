import Vuex from 'vuex'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/todos';

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: [],
      loading: true
    },
    actions: {
      loadData({commit}) {
        axios.get(URL)
        .then((response) => {
          commit('updateToDos', response.data)
          commit('changeLoadingState', false)
        })
      },
      add({commit, text}) {
        axios.post(URL, text)
      }
    },
    mutations: {
      updateToDos(state, todos) {
        state.todos = todos
      },
      changeLoadingState(state, loading) {
        state.loading = loading
      },
      add (state, text) {
        state.todos.push({
          title: text,
          completed: false
        })
      },
      remove (state, { todo }) {
        state.todos.splice(state.todos.indexOf(todo), 1)
      },
      toggle (state, { todo }) {
        todo.done = !todo.done
      }
    }
  })
}

export default createStore
