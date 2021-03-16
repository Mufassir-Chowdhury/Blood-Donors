import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/join',
    name: 'Join',
    component: () => import("../Pages/Join")
  },
  {
    path: '/list',
    name: 'List',
    component: () => import("../Pages/List")
  },
  {
    path: '/Blood-Donors',
    name: 'Home',
    component: () => import("../Pages/Home")
  },
  {
    path: '/',
    name: 'Home_Short',
    component: () => import("../Pages/Home")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
