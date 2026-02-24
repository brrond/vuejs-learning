<script lang="ts" setup>
import { ref } from 'vue'
import BadgeList from './components/BadgeList.vue'
import TheHeader from './components/TheHeader.vue'
import UserInfo from './components/UserInfo.vue'

const activeUser = ref({
  name: 'Maximilian Schwarzmüller',
  description: 'Site owner and admin',
  role: 'admin',
})
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <BadgeList></BadgeList>
    <UserInfo :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></UserInfo>
  </div>
</template>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
