import { createRouter, createWebHistory } from 'vue-router';
import Find from '../views/ride/FindView.vue';
import NotFound from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Find
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    }
  ]
})

export default router
