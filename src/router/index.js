import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myClasses',
    name: 'MyClasses',
    component: () => import('../pages/Class.vue')
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import('../pages/ProfilePage.vue')
  },
  {
    path: '/404',
    name: '404errorPage',
    component: () => import('../pages/404.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../pages/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('../pages/RegisterPage.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
