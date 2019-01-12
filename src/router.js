import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/games'
    },
    {
      path: '/games',
      name: 'games',
      component: () => import(/* webpackChunkName: "todos" */ './views/Games.vue')
    }
  ]
})
