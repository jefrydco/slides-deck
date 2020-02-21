import Vue from 'vue'
import Router from 'vue-router'
import Deck from '../views/Deck.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:page?',
      name: 'home',
      component: Deck,
    },
  ],
})

export default router
