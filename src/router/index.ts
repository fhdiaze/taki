import { createRouter, createWebHistory } from 'vue-router';
import RideFind from '@/views/RideFind.vue';
import NotFound from '@/views/TakiNotFound.vue';

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
      name: 'TakiNotFound',
      component: NotFound,
    }
  ]
})

export default router
