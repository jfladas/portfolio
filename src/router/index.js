import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/AboutView.vue'
import Projects from '@/views/ProjectsView.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'
import Achievements from '@/views/AchievementsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'about' }
    },
    {
      path: '/portfolio/',
      redirect: { name: 'about' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      props: true
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      props: true
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: ProjectDetail,
      props: true
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: Achievements,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'about' }
    }
  ],
})

export default router
