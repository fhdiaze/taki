import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import Home from '../views/Home.vue';
import Find from '../views/race/Find.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/race/find',
    name: 'RaceFind',
    component: Find,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
