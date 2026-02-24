<script lang="ts" setup>
const props = defineProps({
  fullName: {type: String, required: true},
  infoText: {type: String, required: true},
  role: {type: String, required: true},
})
</script>

<template>
  <section>
    <div>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </div>
    <p>{{ infoText }}</p>
  </section>
</template>

<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
