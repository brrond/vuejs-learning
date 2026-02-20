<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const goal = 37;
var calculatedNumber = ref(0);
var active = ref(true);
var valueToShow = computed(() => {
  if (calculatedNumber.value < goal) {
    return "Not there yet";
  } else if (calculatedNumber.value > goal) {
    return "Too much!";
  } else {
    return calculatedNumber.value.toString();
  }
});

function add(n: number) {
  calculatedNumber.value += n;
}

watch(calculatedNumber, (newValue) => {
  if (newValue > goal) {
    setTimeout(() => {
      calculatedNumber.value = 0;
      active.value = true;
    }, 2000);
    active.value = false;
  } else if (newValue == goal) {
    setTimeout(() => {
      calculatedNumber.value = 0;
      active.value = true;
    }, 5000);
    active.value = false;
  }
});
</script>

<template>
  <header>
    <h1>Reactivity in Action</h1>
  </header>
  <section id="assignment">
    <button @click="add(5)" v-bind:disabled="!active">Add 5</button>
    <button @click="add(1)" v-bind:disabled="!active">Add 1</button>
    <p>{{valueToShow}}</p>
  </section>
</template>

<style scoped></style>
