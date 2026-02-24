<script setup lang="ts">
import { onMounted, ref } from 'vue'

const detailsAreVisible = ref(false);
var isFavoriteInComponent = ref(false);

function toggleDetails() {
  detailsAreVisible.value = !detailsAreVisible.value;
}

const props = defineProps({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  isFavorite: { type: Boolean, required: false, default: false, },
});

function toggleFavorite() {
  isFavoriteInComponent.value = !isFavoriteInComponent.value
}

onMounted(() => {
  isFavoriteInComponent.value = props.isFavorite.valueOf()
});
</script>

<template>
  <li>
    <h2>{{ name }} {{ isFavoriteInComponent ? "(Favorite)" : "" }}</h2>
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
