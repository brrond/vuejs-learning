<script setup lang="ts">
import { ref } from 'vue';
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

const userData = ref({
  username: "Username",
  age: 1
})

function update(username: string, age: number) {
  userData.value.username = username;
  userData.value.age = age;
}
</script>

<template>
  <ActiveUser :username="userData.username" :age="userData.age"></ActiveUser>
  <UserData @update-user-data="update"></UserData>
</template>

<style></style>
