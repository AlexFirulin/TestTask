<template>
<div>
  <ul class="d-flex flex-column">
    <li v-for="order in ordersArr" :key="order.id" class="order-list d-flex position-relative align-items-center">
      <div>{{ order.description }}</div>
      <div>{{ order.title }}</div>
      <div>{{ order.date }}</div>
      <button class="move-btn" @click="showProd(order)"><span>&gt;</span></button>
      <div>{{ order.products.date }}</div>
      <transition name="slide">
      <div v-if="order.showRelated" class="show">
          <ul class="d-flex px-5 mx-2 align-items-center" >
            <li v-for="product in order.products" :key="product.id" class="product-list">
              <div class="d-flex align-items-center p-2 product-card" >
          <img :src="product.photo" alt="/" />
          <div class="flex-fill">{{ product.title }} {{ product.type }}</div>
          <div v-if="product.isNew">
            <span class="text-primary">свободен</span>
          </div>
          <div v-else><span>В ремонте</span></div>
          <div class="d-flex flex-column">
            <div>{{ product.guarantee.start }}</div>
            <div>{{ product.guarantee.end }}</div>
          </div>
          <div>
            <span class="text-primary">{{ product.specification }}</span>
          </div>
          <div>{{ product.formattedDate }}</div>
          <div class="d-flex flex-column">
            <div v-for="currency in product.price" :key="currency.value">
              <div>{{ currency.value }}{{ currency.symbol }}</div>
            </div>
          </div>
          <div>Длинное предлинное название прихода{{ product.order }}</div>
          <div>{{ product.date }}</div>
        </div>
            </li>
          </ul>
        </div>
        </transition>
    </li>
  </ul>
</div>
</template>

<script setup>
import { useOrdersStore } from '../store/orders'
import { ref, reactive } from "vue"

const { orders, getOrderProducts } = useOrdersStore()
const ordersArr = reactive(getOrderProducts.map(order => ({
  ...order,
  showRelated: false
})));

const showProd = (order) => {
  order.showRelated = !order.showRelated;
}


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
.product-card {
 gap: 10px;
 border: 1px solid #646464;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease-out;
}
.slide-enter, .slide-leave-to {
  transform: translateX(50%);
}
</style>