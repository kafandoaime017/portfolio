import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/pages/Homepage.vue'
import DetailsProject from '@/views/pages/detailsProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/project',
      name: 'projet',
      component: DetailsProject,
    },
    
  ],
})

export default router
