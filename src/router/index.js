import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myClassrooms',
    name: 'MyClassrooms',
    component: () => import('../pages/MyClassrooms.vue')
  },
  {
    path: '/classroom/:id',
    name: 'ClassroomDetails',
    component: () => import('../pages/Classroom.vue')
  },
  {
    path: '/classroom/:id/edit',
    name: 'EditClassroom',
    component: () => import('../pages/EditClassroomPage.vue')
  },
  {
    path: '/classroom/new',
    name: 'NewClassroom',
    component: () => import('../pages/NewClassroomPage.vue')
  },
  {
    path: '/classroom/:id/newLesson',
    name: 'NewLesson',
    component: () => import('../pages/NewLessonPage.vue')
  },
  
  {
    path: '/lesson/:id',
    name: 'lesson',
    component: () => import('../pages/LessonPage.vue')
  },
  {
    path: '/lesson/:id/edit',
    name: 'EditLesson',
    component: () => import('../pages/EditLessonPage.vue')
  },

  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import('../pages/ProfilePage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'errorPage',
    component: () => import('../pages/errorPage.vue')
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
