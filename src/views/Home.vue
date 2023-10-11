<template>
  <div>
    <div class="product d-flex align-items-center">
      <h1>Приходы</h1>
      <div>
        <label for="type" class="label">Тип : </label>
        <input type="search" id="type" v-model="typeSort" @input="sortByType"/>
      </div>
      <div>
        <label for="spec" class="label">Спецификация : </label>
        <input type="search" id="spec" v-model="specSort" @input="sortBySpec"/>
      </div>
    </div>
    <div class="d-flex align-items-center"></div>
    <ul>
      <li v-for="product in getProduct" :key="product.id">
        <div class="d-flex align-items-center product-card">
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
          <i class="bi bi-trash" @click="removeProduct(product.id)"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useProductStore } from "../store/products.js";
import { ref, computed, reactive } from "vue";

const { products } = useProductStore();
const specSort = ref("");
const typeSort = ref("");
const setId = ref(null);

let productArr = reactive(products);

function removeProduct(id) {
  setId.value = id;
  productArr = productArr.filter((product) => product.id !== setId.value);
}

function sortByType() {
  return productArr.filter((product) =>
    product.type.toLowerCase().includes(typeSort.value.toLowerCase())
  );
}

function sortBySpec() {
  return productArr.filter((product) =>
    product.specification.toLowerCase().includes(specSort.value.toLowerCase())
  );
}

const getProduct = computed(() => {
  if (typeSort.value) return sortByType();
  else if (specSort.value) return sortBySpec();
  else if (setId.value) removeProduct(setId.value);

  return productArr;
});
</script>


<style scoped>
li {
  list-style: none;
}

.product {
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 20px;
  gap: 20px;
}

.product-card {
  border: 1px solid #656e71;
  padding: 15px;
  margin: 10px;
  gap: 20px;
}
.label {
  font-family: "Rubik", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #c0baba;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
