<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <button v-if="!store.getters.isAuthenticated" @click="store.commit('authenticate')">Login</button>
  <button v-else @click="store.commit('logout')">Logout</button>
</template>
