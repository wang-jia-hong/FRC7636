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
    path: '/about',
    children: [
      {
        path: '/FIRST',
        name: 'FIRST',
        component: FIRST
      },
      {
        path: '/Team History',
        name: 'history',
        component: History
      },
      {
        path: '/#7636',
        name: 'Team',
        component: Team
      },
      {
        path: '/Contact',
        name: 'contact',
        component: Contact
      },
      {
        path: '/Leader',
        name: 'Leader',
        component:Leader
      },
      {
        path: '/Mentor',
        name: 'Mentor',
        component: Mentor
      },
    ]
  },
  {
    path: '/event',
    children: [
      {
        path: '/News',
        name: 'news',
        component: News
      },
      {
        path: '/Past seasons',
        name: 'past',
        component: Past
      },
    ]
  },
  {
    path: '/resource',
    children: [
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
    ]
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
