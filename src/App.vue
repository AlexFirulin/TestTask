<template>
  <top-menu />
  <div class="d-flex">
  <navigation-menu-vue />
  <main class="p-4">
    <router-view></router-view>
  </main>
</div>
  </template>

  <script setup>
  import NavigationMenuVue from './components/NavigationMenu.vue';
  import TopMenu from './components/TopMenu.vue';
  </script>

  <style>

  </style>