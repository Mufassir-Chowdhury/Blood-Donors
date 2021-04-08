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
    component: () => import("../Pages/HomePage")
  },
  {
    path: '/',
    name: 'Home_Short',
    component: () => import("../Pages/HomePage")
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
  },
  {
    path: '/Blood-Donors/edit',
    name: 'Edit List',
    component: () => import("../Pages/EditList")
  },
  {
    path: '/Blood-Donors/edit/:id',
    name: 'Edit User',
    component: () => import("../Pages/EditUser")
  },
  {
    path: '/Blood-Donors/home',
    name: 'HomePage',
    component: () => import("../Pages/HomePage")
  },
  {
    path: '/Blood-Donors/contact',
    name: 'Contact',
    component: () => import("../Pages/Contact")
  },
  {
    path: '/Blood-Donors/export',
    name: 'Export',
    component: () => import("../Pages/Export")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
