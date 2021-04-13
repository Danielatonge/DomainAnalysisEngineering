import { createRouter, createWebHistory } from 'vue-router'
import Domain from '../views/Domain'
import Products from '../views/Products'
import Vocabulary from '../views/Vocabulary'
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
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
