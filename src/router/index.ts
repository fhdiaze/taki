import { createRouter, createWebHistory } from 'vue-router';
import RideFind from '../views/RideFind.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RideFind
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    }
  ]
})

export default router
