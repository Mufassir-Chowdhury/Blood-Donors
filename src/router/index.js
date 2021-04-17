import { createRouter, createWebHistory } from 'vue-router';
import firebase from 'firebase/app';
import 'firebase/auth';
import HomePage from '../Pages/HomePage.vue';
import Login from '../Pages/Login.vue';

const routes = [
  {
    path: '/Blood-Donors/join',
    name: 'Join',
    component: () => import("../Pages/Join"),
    meta: {requiresAuth: true}
  },
  {
    path: '/Blood-Donors/list',
    name: 'List',
    component: () => import("../Pages/List"),
    meta: {requiresAuth: true}
  },
  {
    path: '/Blood-Donors',
    name: 'Home',
    component: HomePage,
    meta: {requiresAuth: true}
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Blood-Donors/groups',
    name: 'Groups',
    component: () => import("../Pages/Groups"),
    meta: {requiresAuth: true}
  },
  {
    path: '/Blood-Donors/groups/:id',
    name: 'Group List',
    component: () => import("../Pages/GroupList"),
    meta: {requiresAuth: true}
  },
  {
    path: '/Blood-Donors/edit',
    name: 'Edit List',
    component: () => import("../Pages/EditList"),
    meta: {requiresAuth: true}
  },
  {
    path: '/Blood-Donors/edit/:id',
    name: 'Edit User',
    component: () => import("../Pages/EditUser"),
    meta: {requiresAuth: true}
  },
  {
    path: '/Blood-Donors/home',
    name: 'HomePage',
    component: () => import("../Pages/HomePage"),
    meta: {requiresAuth: true}
  },
  {
    path: '/Blood-Donors/contact',
    name: 'Contact',
    component: () => import("../Pages/Contact"),
    meta: {requiresAuth: true}
  },
  {
    path: '/Blood-Donors/export',
    name: 'Export',
    component: () => import("../Pages/Export"),
    meta: {requiresAuth: true}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next('/');
  } else {
    next();
  }
})

export default router
