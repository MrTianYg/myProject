import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/dragH5'
import routesArray from './module/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'view',
  routes: [
    {
      path: '/',
      name: 'dragH5',
      component: HelloWorld
    },
    {
      path: '/home',
      children: routesArray
    }
  ]
})
