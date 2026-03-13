<script setup lang="ts">
import { useStore } from 'vuex'
import BaseContainer from './components/BaseContainer.vue'
import { ref } from 'vue'

const store = useStore()

const val = ref(10)
</script>

<template>
  <base-container title="Vuex">
    <h3>{{ store.getters.getCounter }}</h3>
    <button @click="
      store.commit({
        type: 'increase',
        value: val,
      })
      ">
      Add {{ val }}
    </button>
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
