import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'games',
      component: () => import(/* webpackChunkName: "todos" */ './views/Games.vue')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import(/* webpackChunkName: "todos" */ './views/Games.vue')
    }
  ]
})
