import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home';
import List from '../Pages/List';
import Join from '../Pages/Join';

const routes = [
  {
    path: '/Blood-Donors/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/Blood-Donors/list',
    name: 'List',
    component: List
  },
  {
    path: '/Blood-Donors',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
