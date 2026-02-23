<script setup lang="ts">
import { ref, type Ref } from 'vue';

var goals: Ref<String[]> = ref([]);
var inputGoal = ref("");

function addGoal() {
  goals.value.push(inputGoal.value);

}
</script>

<template>
  <header>
    <h1>Vue Course Goals</h1>
  </header>
  <section id="user-goals">
    <h2>My course goals</h2>
    <input type="text" v-model="inputGoal"/>
    <button @click="addGoal">Add Goal</button>
    <p v-if="goals.length === 0">No goals have been added yet - please start adding some!</p>
    <ul v-else>
    </ul>
  </section>
</template>

<style scoped></style>
