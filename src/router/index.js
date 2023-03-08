import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import Home from '../views/Home.vue';
import List from '../views/ride/List.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: List
  },
  {
    path: '/ride/list',
    name: 'RideList',
    component: List,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
