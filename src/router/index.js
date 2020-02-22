import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Contents/HomePage.vue'

import FIRST from '../views/Contents/About/FIRSTPage.vue'
import Team from '../views/Contents/About/Team7636.vue'
import History from '../views/Contents/About/TeamHistoryPage.vue'
import Contact from '../views/Contents/About/ContactPage.vue'
import Leader from '../views/Contents/About/LeaderPage.vue'
import Mentor from '../views/Contents/About/Mentor.vue'

import News from '../views/Contents/Event/News.vue'
import Past from '../views/Contents/Event/PastSeason.vue'
import DeepSpace from '../views/Contents/Event/Past season/2019DeepSpace.vue'
import InfiniteRecharge from '../views/Contents/Event/Past season/2020InfiniteRecharge.vue'

import CAD from '../views/Contents/Resources/CADPage.vue'
import Document from '../views/Contents/Resources/Documents.vue'
import Video from '../views/Contents/Resources/Videos.vue'

import Sponsor from '../views/Contents/SponsorsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'Home'
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
    path: '/Team History',
    component: History
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
    path: '/Documents',
    name: 'document',
    component: Document
  },
  {
    path: '/CADs',
    name: 'CAD',
    component: CAD
  },
  {
    path: '/Videos',
    name: 'video',
    component: Video
  },
  {
    path: '/sponsor',
    name: 'sponsor',
    component: Sponsor
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
