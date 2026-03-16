import { createStore } from "vuex";

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },

    increase(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit("increment");
      }, 2000);
    },
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
};

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      authenticated: false,
    };
  },
  mutations: {
    authenticate(state) {
      state.authenticated = true;
    },

    logout(state) {
      state.authenticated = false;
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.authenticated;
    },
  },
});


export default store;
