<template>
<div>
  <ul class="d-flex flex-column">
    <li v-for="order in ordersArr" :key="order.id" class="order-list d-flex position-relative">
      <div>{{ order.description }}</div>
      <div>{{ order.title }}</div>
      <div>{{ order.date }}</div>
      <button class="move-btn"><span>&gt;</span></button>
      <div>{{ order.products.date }}</div>
      <div>
          <ul>
            <li v-for="product in order.products" :key="product.id">
              <div>{{ product.name }}</div>
              <div>{{ product.date }}</div>
            </li>
          </ul>
        </div>
    </li>


  </ul>
</div>
</template>

<script setup>
import { useOrdersStore } from '../store/orders'
import { reactive } from "vue"

const { orders, getOrderProducts } = useOrdersStore()
let ordersArr = reactive(getOrderProducts)


</script>

<style scoped>
.order-list {
  gap: 15px;
  padding: 15px;
  margin: 7px;
  border: 1px solid #7f7f7f;
  width: 250px;
  cursor: pointer;
}
.move-btn{
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  padding: 0px 10px;
  opacity: 0;
  transition: opacity 0.3s;
}
.order-list:hover .move-btn{
  opacity: 1;
}
</style>