<!-- 首页 -->
<template>
<div id="contain"> 
  <vue-drawer-layout ref="drawer" :drawer-width="370">
  <div class="drawer-content" slot="drawer">
    1234567
  </div>
  <div slot="content">
    <!--主页面-->
       <!--Header-->
       <div class="mui-bar mui-bar-nav">
          <a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left" @click="show"></a>
           <router-link class="tar" to="/mine">我的</router-link>
           <router-link class="tar" to="/find">发现</router-link>
           <router-link class="tar" to="/cloude">云村</router-link>
           <router-link class="tar" to="/video">视频</router-link>
           <router-link  to="/search" class="mui-icon  mui-icon-search"></router-link>
       </div>
       <router-view></router-view>
       
       <div class="foot">
         <div>
           <img src="" alt="">
         </div>
         </div> 
  </div>
</vue-drawer-layout>
</div>

</template>
 
<script>
import DrawerLayout from 'vue-drawer-layout'
  export default{
    name:"APP",
    data(){
      return{
 
      }
    },
    methods:{
      show(){
        this.$refs.drawer.toggle();
       
      }
    }
  }
</script>
 
<style  scoped>
#contain{
  
}
 .drawer-content{
   background-color: white;
  height: 100%;
 }
 .mui-bar{
   height: 60px;
  justify-content: center; /*子元素水平居中*/
   align-items: center; /*子元素垂直居中*/
   display: -webkit-flex;

}
.mui-icon-bars{
   display: block;
   position:absolute;
   left:13px;
   color: black;
}
.mui-icon-search{
   display: block;
   position:absolute;
   right:13px;
   color: black;
}

.router-link-active{
  color:black;
  
  font-size: 20px;
  font-weight: 500;

}

.tar{
  display: block;
  margin:0 10px;
}
.foot{
position: absolute;
bottom: 0px;
width: 100%;
height: 50px;
border-top: 1px solid gainsboro;
background-color: white;
opacity: 0.8;
}
.overflow{
  height: 100%;
  overflow: auto
}

</style>