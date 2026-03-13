import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },

    increase(state, payload) {
      state.counter += payload.value
    },
  },
  getters: {
    getCounter(state) {
      return state.counter
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
