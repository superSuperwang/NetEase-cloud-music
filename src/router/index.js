import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import find from '@/components/find'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/find'
    },
    {
      path: '/find',
      name:'find',
      component: find
    }

  ]
})
