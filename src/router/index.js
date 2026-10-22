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
      // old project URL, still linked from other pages
      path: '/projects/bachelor',
      redirect: '/projects/blob'
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
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (to.name === 'projects' && from.name === 'project-detail') {
      return savedPosition || false
    }
    return { top: 0 }
  }
})

// GitHub Pages redirects /projects to /projects/ (the folder of prerendered project pages); drop the trailing slash again
router.beforeEach((to) => {
  if (to.path.length > 1 && to.path.endsWith('/')) {
    return { path: to.path.slice(0, -1), query: to.query, hash: to.hash, replace: true }
  }
})

export default router
