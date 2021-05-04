import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/components/Home.vue'
import Product from '../src/components/Product'
import About from '../src/components/About'

const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router