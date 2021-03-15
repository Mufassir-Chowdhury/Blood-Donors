import { createRouter, createWebHistory } from 'vue-router';
import List from './Pages/List';
import Home from './Pages/Home';
import Join from './Pages/Join';

const routes = [
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
