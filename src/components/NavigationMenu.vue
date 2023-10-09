<template>
<nav class="nav-bar d-flex flex-column align-items-center py-4 vh-100">
  <div class="d-flex flex-column flex-fill align-items-center">
  <div class="py-4 photo-img">
    <img src="../assets/vue.svg" alt="/" class="img-fluid">
  </div>
  <ul class="d-flex flex-column align-items-center nav-wrapper">
    <li v-for="(item, index) in menuItems" :key="index">
      <router-link :to="item.route">{{ item.label }}</router-link>
    </li>
  </ul>
</div>
</nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
    const route = useRoute();

    const menuItems = ref([
      { label: 'Приход', route: '/home' },
      { label: 'Группы', route: '/группы' },
      { label: 'Продукты', route: '/продукты' },
      { label: 'Пользователи', route: '/пользователи' },
      { label: 'Настройки', route: '/настройки' }
    ]);

</script>

<style scoped>
a {
  text-decoration: none;
  color: #000000;
}
li {
  font-family: 'Rubik', sans-serif;
 font-size: 14px;
 font-weight: 700;

 text-transform: uppercase;
 letter-spacing: 1px;
}
.nav-bar {
  background: rgb(255, 255, 255 0.1);
  width: 20%;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
   z-index: 1;
}
.nav-wrapper{
  gap: 20px;
}
.photo-img{
  flex-basis: 20%;
    align-items: center;
    display: flex;
}
</style>