<template>
<div v-for="order in orders" :key="order.id">
  <div>{{ order.description }}</div>
</div>
</template>

<script setup>
import { useOrdersStore } from '../store/orders'
const { orders } = useOrdersStore()
</script>

<style>

</style>