//引入路由
import Vue from 'vue'
import Router from 'vue-router'

//引入模板
import register from '@/components/register'
import find from '@/components/tabbar/find'
import mine from '@/components/tabbar/mine'
import video from '@/components/tabbar/video'
import cloude from '@/components/tabbar/cloude'
import recommend from '@/components/secondComponents/recommend'

//挂载路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/register',
     
    },
    {
      path: '/register',
      name:'register',
      component: register
    },
    {
      path: '/find',
      name:'find',
      component: find ,
      children:[
        {path:'/find/recommend',component: recommend}
      ]
        
        
     
    },
    {
      path:'/mine',
      name:'mine',
      component: mine
    },
    {
      path:'/video',
      name:'video',
      component: video
    },
    {
      path:'/cloude',
      name:'cloude',
      component: cloude
    }

  ]
})
