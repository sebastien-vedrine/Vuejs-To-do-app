import Vuex from 'vuex'

new Vuex.Store({
  state: { counter: 0 },
  mutations: {
    increment (state) {
      state.counter++
    }
  },
  modules: {
    todos: {
      state: {
        list: []
      },
      mutations: {
        add (state, { text }) {
          state.list.push({
            text,
            done: false
          })
        },
        toggle (state, { todo }) {
          todo.done = !todo.done
        }
      }
    }
  }
})
