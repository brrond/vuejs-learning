<script setup lang="ts">
import BaseBadge from './BaseBadge.vue'
import BaseCard from './BaseCard.vue';
</script>

<template>
  <BaseCard>
    <h2>Available Badges</h2>
    <ul>
      <li>
        <BaseBadge type="admin" caption="ADMIN"></BaseBadge>
      </li>
      <li>
        <BaseBadge type="author" caption="AUTHOR"></BaseBadge>
      </li>
    </ul>
  </BaseCard>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
