<script setup lang="ts">
import { ref } from 'vue'

const detailsAreVisible = ref(false);

function toggleDetails() {
  detailsAreVisible.value = !detailsAreVisible.value;
}

const props = defineProps({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  isFavorite: { type: Boolean, required: false, default: false, },
});

const emits = defineEmits(["toggle-favorite"])

function toggleFavorite() {
  emits("toggle-favorite", props.id)
}
</script>

<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
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
