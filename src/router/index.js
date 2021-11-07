import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import UserPage from '../components/UserPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/UserPage',
    name: 'userPage',
    component: UserPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
