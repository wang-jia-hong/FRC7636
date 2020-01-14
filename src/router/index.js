import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import MainPage from '../views/MainPage.vue'
import ProblemPage from '../views/ProblemPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: MainPage
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/ProblemPage',
    name: 'problemPage',
    component: ProblemPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
