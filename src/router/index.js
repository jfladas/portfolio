import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/ProjectsView.vue'
import About from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'about' }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio/',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/portfolio/:queryParams(.*)',
      name: 'Result',
      component: Result,
      props: true
    }
  ],
})

export default router
