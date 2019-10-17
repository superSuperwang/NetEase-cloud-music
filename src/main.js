// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//侧滑菜单组件
import DrawerLayout from 'vue-drawer-layout'
Vue.use(DrawerLayout)

//mui样式
import "../static/lib/mui/css/mui.min.css"
import "../static/lib/mui/css/icons-extra.css"

//按需导入mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//mint-ui需导入其css
import 'mint-ui/lib/style.css'

//导入axios
import axios from 'axios' 
// 使用axios
Vue.prototype.axios = axios;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
