<script lang="ts" setup>
import BaseCard from './BaseCard.vue'
import BaseBadge from './BaseBadge.vue';

const props = defineProps({
  fullName: { type: String, required: true },
  infoText: { type: String, required: true },
  role: { type: String, required: true },
})
</script>

<template>
  <BaseCard>
    <div>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()"></BaseBadge>
    </div>
    <p>{{ infoText }}</p>
  </BaseCard>
</template>

