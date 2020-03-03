import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Contents/HomePage.vue'

import FIRST from '../views/Contents/About/FIRSTPage.vue'
import Team from '../views/Contents/About/Team7636.vue'
import Outreach from '../views/Contents/About/Outreach.vue'
import Leader from '../views/Contents/About/LeaderPage.vue'
import Mentor from '../views/Contents/About/Mentor.vue'

import News from '../views/Contents/Event/News.vue'
import Past from '../views/Contents/Event/PastSeason.vue'
import DeepSpace from '../views/Contents/Event/Past season/2019DeepSpace.vue'
import InfiniteRecharge from '../views/Contents/Event/Past season/2020InfiniteRecharge.vue'

import Resource from '../views/Contents/Resource.vue'

import Sponsor from '../views/Contents/SponsorsPage.vue'

import Contact from '../views/Contents/ContactPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/FIRST',
    component: FIRST
  },
  {
    path: '/Team 7636',
    component: Team
  },
  {
    path: '/Contact',
    component: Contact
  },
  {
    path: '/Outreach',
    component: Outreach
  },
  {
    path: '/Leader',
    component:Leader
  },
  {
    path: '/Mentor',
    component: Mentor
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/past-seasons',
    component: Past
  },
  {
    path: '/2019DeepSpace',
    component: DeepSpace
  },
  {
    path: '/2020InfiniteRecharge',
    component: InfiniteRecharge
  },
  {
    path: '/News',
    component: News
  },
  {
    path: '/resource',
    component: Resource,
  },
  {
    path: '/sponsor',
    name: 'sponsor',
    component: Sponsor
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
