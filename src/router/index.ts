import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/all-tasks'
  },
  {
    path: '/all-tasks',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/pending-tasks',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/done-tasks',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
