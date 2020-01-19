import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/Contents/HomePage.vue'
import FIRST from '../views/Contents/FIRSTPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/FIRST',
    name: 'FIRST',
    component: FIRST
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
