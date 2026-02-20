<script setup lang="ts">
import { ref } from 'vue';

var userInput = ref("");
var confirmedUserInput = ref("");

function showAlert() {
  alert("Some text");
}

function inputAction(event: Event) {
  userInput.value = event.target.value;
}

function confirmInput(_: Event) {
  confirmedUserInput.value = userInput.value;
}

function resetInput() {
  confirmedUserInput.value = "";
}
</script>

<template>
  <header>
    <h1>Events</h1>
  </header>
  <section id="assignment">
    <h2>Event Practice</h2>
    <button @click="showAlert()">Show Alert</button>
    <hr/>

    <input type="text" @input="inputAction"/>
    <p>{{userInput}}</p>
    <hr/>

    <input type="text" @input="inputAction" @keypress.enter="confirmInput"/>
    <p>{{confirmedUserInput}}</p>
    <button @click="resetInput">Reset Input</button>
  </section>
</template>

<style scoped></style>
