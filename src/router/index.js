import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/Blood-Donors/join',
    name: 'Join',
    component: () => import("../Pages/Join")
  },
  {
    path: '/Blood-Donors/list',
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
  },
  {
    path: '/Blood-Donors/groups',
    name: 'Groups',
    component: () => import("../Pages/Groups")
  },
  {
    path: '/Blood-Donors/groups/:id',
    name: 'Group List',
    component: () => import("../Pages/GroupList")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
