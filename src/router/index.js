import { createRouter, createWebHistory } from 'vue-router'
import Domain from '../views/Domain'
import Products from '../views/Products'
import Vocabulary from '../views/Vocabulary'

const routes = [
  {
    path: '/domain',
    name: 'Domain',
    component: Domain
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/vocabulary',
    name: 'Vocabulary',
    component: Vocabulary
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
