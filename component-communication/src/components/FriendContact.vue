<script setup lang="ts">
import { ref } from 'vue'

const detailsAreVisible = ref(false);
const friend = {
  id: "manuel",
  name: "Manuel Lorenz",
  phone: "0123 45678 90",
  email: "manuel@localhost.com",
};

function toggleDetails() {
  detailsAreVisible.value = !detailsAreVisible.value;
}

defineProps({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
});
</script>

<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>
