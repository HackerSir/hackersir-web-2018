import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ClubIntroduction from '@/components/about/ClubIntroduction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about/club-introduction',
      name: 'ClubIntroduction',
      component: ClubIntroduction
    }
  ]
})
