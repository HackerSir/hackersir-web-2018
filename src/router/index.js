import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import About from '@/components/about/About'
import ClubIntroduction from '@/components/about/ClubIntroduction'
import JoinUs from '@/components/about/JoinUs'
import History from '@/components/about/History'
import Rule from '@/components/about/Rule'
import Partner from '@/components/about/Partner'
import Cadre from '@/components/about/Cadre'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: 'club-introduction',
          name: 'ClubIntroduction',
          component: ClubIntroduction
        },
        {
          path: 'join-us',
          name: 'JoinUs',
          component: JoinUs
        },
        {
          path: 'history',
          name: 'History',
          component: History
        },
        {
          path: 'rule',
          name: 'Rule',
          component: Rule
        },
        {
          path: 'partner',
          name: 'Partner',
          component: Partner
        },
        {
          path: 'cadre',
          name: 'Cadre',
          component: Cadre
        }
      ]
    }
  ]
})
