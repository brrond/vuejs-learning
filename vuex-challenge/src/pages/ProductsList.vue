<template>
  <section>
    <ul>
      <product-item v-for="prod in store.getters.getProducts" :key="prod.id" :id="prod.id" :title="prod.title" :image="prod.image"
        :description="prod.description" :price="prod.price"></product-item>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import ProductItem from '../components/products/ProductItem.vue'

const store = useStore()
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
