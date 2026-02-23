<script setup lang="ts">
import { ref, type Ref } from 'vue';

var goals: Ref<String[]> = ref([]);
var inputGoal = ref("");

function addGoal() {
  if (inputGoal.value === "") {
    return;
  }
  goals.value.push(inputGoal.value);
  inputGoal.value = "";
}

function removeGoal(index: number) {
  goals.value.splice(index, 1);
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
      <li v-for="(goal, index) in goals" @click="removeGoal(index)">{{goal}}</li>
    </ul>
  </section>
</template>

<style scoped></style>
