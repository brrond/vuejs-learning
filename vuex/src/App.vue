<script setup lang="ts">
import { useStore } from 'vuex'
import BaseContainer from './components/BaseContainer.vue'

const store = useStore()
</script>

<template>
  <base-container title="Vuex">
    <h3>{{ store.state.counter }}</h3>
    <button @click="store.state.counter++">Add 1</button>
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
