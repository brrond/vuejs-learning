<script setup lang="ts">
import { ref } from 'vue';


var counter = ref(0)
var name = ref("")

function add(num: number) {
  counter.value += num;
}

function setName(event: Event) {
  name.value = event.target.value;
}

function formFunction(event: Event) {
  alert(event.target);

}
</script>

<template>
  <header>
    <h1>Vue Events</h1>
  </header>
  <section id="events">
    <h2>Events in Action</h2>
    <button v-on:click="add(5)">Add 5</button>
    <button v-on:click="counter = 0">Reset</button>
    <button v-on:click="add(-5)">Subtract 5</button>
    <p>Result: {{ counter }}</p>
    <input type="text" v-on:input="setName">
    <p>Your Name: {{name}}</p>

    <form action="POST" @submit.prevent="formFunction">
      <input id="name" type="text">
      <button>Some</button>
    </form>
  </section>
</template>

<style scoped></style>
