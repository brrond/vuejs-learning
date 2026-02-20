<script setup lang="ts">
import { ref } from 'vue';

var userInput = ref('');
var user1Active = ref(false);
var user2Active = ref(false);

function handleUserInput(event: Event) {
  userInput.value = event.target.value;
  if (userInput.value === "user1") {
    user1Active.value = true;
    user2Active.value = false;
  } else if (userInput.value === "user2") {
    user1Active.value = false;
    user2Active.value = true;
  } else {
    user1Active.value = false;
    user2Active.value = false;
  }
}

var isVisible = ref(true);

function toggleVisibility() {
  isVisible.value = !isVisible.value;
}

var color = ref("");
</script>

<template>
  <header>
    <h1>Vue Styling</h1>
  </header>
  <section id="assignment">
    <input type="text" @input="handleUserInput"/>
    <p :class="{user1: user1Active, user2: user2Active, visible: isVisible, hidden: !isVisible}">Style me!</p>
    <button @click="toggleVisibility">Toggle Paragraph</button>

    <input type="text" v-model="color"/>
    <p :style="{color: color}">Style me inline!</p>
  </section>
</template>

<style scoped>
.user1 {
  background-color: blue;
  color: white;
}

.user2 {
  background-color: purple;
  color: white;
}

.hidden {
  display: none;
}

.visible {
  display: block;
}
</style>
