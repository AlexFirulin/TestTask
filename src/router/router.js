import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name:'Homepage',
    component:MainLayout
  },
  {
    path: '/home',
    name:'Homepage',
    component:Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;