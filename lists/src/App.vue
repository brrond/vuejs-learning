<script setup lang="ts">
import { ref, type Ref } from 'vue';

var tasks: Ref<String[]> = ref([]);
var taskInputValue = ref("");
var renderList = ref(true);

function addTask() {
  if (taskInputValue.value === "") {
    return;
  }
  tasks.value.push(taskInputValue.value);
  taskInputValue.value = "";
}

function toggleListVilibility() {
  renderList.value = !renderList.value;
}
</script>

<template>
  <header>
    <h1>Vue Lists and Conditional Content</h1>
  </header>
  <section id="assignment">
    <h2>Assignment</h2>
    <input type="text" v-model="taskInputValue" />
    <button @click="addTask">Add Task</button>
    <ul v-if="tasks.length != 0 && renderList">
      <li v-for="task in tasks">{{ task }}</li>
    </ul>
    <button @click="toggleListVilibility">Hide / Show List</button>
  </section>

</template>

<style scoped></style>
