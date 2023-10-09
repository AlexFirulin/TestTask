<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <div>{{ product.serialNumber }}</div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '../store/products.js'
const { products } = useProductStore();
</script>

<style>
</style>
