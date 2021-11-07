import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import UserPage from '../components/UserPage.vue'

const routes = [
  {path: '/', component: App},
  {path: '/UserPage', component: UserPage}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
