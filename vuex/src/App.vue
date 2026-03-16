<script setup lang="ts">
import { useStore } from 'vuex'
import BaseContainer from './components/BaseContainer.vue'
import { ref } from 'vue'
import UserAuth from './components/UserAuth.vue'

const store = useStore()

const val = ref(10)
</script>

<template>
  <user-auth></user-auth>
  <base-container v-if="store.getters.isAuthenticated" title="Vuex">
    <h3>{{ store.getters["counter/getCounter"] }}</h3>
    <button @click="
      store.commit({
        type: 'counter/increase',
        value: val,
      })
      ">
      Add {{ val }}
    </button>
    <button @click="store.dispatch('counter/increment')">Increment</button>
  </base-container>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
