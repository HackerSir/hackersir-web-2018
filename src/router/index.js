import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import About from '@/components/About'
import ClubIntroduction from '@/components/about/ClubIntroduction'
import JoinUs from '@/components/about/JoinUs'
import History from '@/components/about/History'
import Rule from '@/components/about/Rule'
import Partner from '@/components/about/Partner'
import Cadre from '@/components/about/Cadre'

import Activity from '@/components/Activity'

import Achievement from '@/components/Achievement'
import ActivityRecord from '@/components/achievement/ActivityRecord'
import Project from '@/components/achievement/Project'

import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
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
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/achievement',
      name: 'Achievement',
      component: Achievement,
      children: [
        {
          path: 'activity-record',
          name: 'ActivityRecord',
          component: ActivityRecord
        },
        {
          path: 'project',
          name: 'Project',
          component: Project
        }
      ]
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
