import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0,
      authenticated: false,
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },

    increase(state, payload) {
      state.counter += payload.value
    },

    authenticate(state) {
      state.authenticated = true
    },

    logout(state) {
      state.authenticated = false
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment')
      }, 2000)
    },
  },
  getters: {
    getCounter(state) {
      return state.counter
    },

    isAuthenticated(state) {
      return state.authenticated
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
