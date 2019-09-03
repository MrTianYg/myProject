import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/slider/index'
import routesArray from './module/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'view',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      children: routesArray
    }
  ]
})
