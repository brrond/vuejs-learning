<script setup lang="ts">

const courceGoal = "Finish the course and learn vue";
const link = ""

function getGoal(): String {
  if (Math.random() < .5) {
    return courceGoal;
  }
  return "Other goal";
}
</script>

<template>
  <header>
    <h1>Vue Course Goals</h1>
  </header>
  <section id="user-goal">
    <h2>My Course Goal</h2>
    <p>{{ getGoal() }}</p>
    <p>Learn more <a :href="link">about Vue</a>.</p>
  </section>
</template>

<style scoped></style>
