<!-- 首页 -->
<template>
<div id="contain">
  
   <!--侧滑菜单组件-->
  <vue-drawer-layout ref="drawer" :drawer-width="370">
       <!--侧滑菜单内容-->
      <div class="drawer-content" slot="drawer">
      1234567
      </div>
      <!--/侧滑菜单内容-->
       <!--主页面内容-->
     <div slot="content"  class="main-content">
       <!--顶部导航-->
       <div class="mui-bar mui-bar-nav">
           <a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left" @click="show"></a>
           <router-link class="tar" to="/mine">我的</router-link>
           <router-link class="tar" to="/find">发现</router-link>
           <router-link class="tar" to="/cloude">云村</router-link>
           <router-link class="tar" to="/video">视频</router-link>
           <a @click="flag=!flag" class="mui-icon  mui-icon-search"></a>
       </div>
       <!--vue组件显示区域-->
       <router-view></router-view>
     
       <!--底部-->
       <div v-show="haveMusic" class="foot">
         <div class="head-img">
           <img src="./images/head.jpeg" alt="">
         </div>
       </div> 
   </div>
    <!--/主页面内容-->
  </vue-drawer-layout>
  <!--/侧滑菜单组件-->

   <!--搜索遮罩层-->
  <transition name='search'>
    <div v-show='flag' class="search">
      <input type="button" @click="flag=!flag" value="">
      我是search</div>
  </transition>
 
 </div>

</template>
 
<script>
import DrawerLayout from 'vue-drawer-layout'
  export default{
    name:"APP",
    data(){
      return{
        haveMusic:false,
        flag: false
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

.main-content {
  
      overflow: hidden;
      height: 100%;
      overflow:auto;
      -webkit-overflow-scrolling: touch;
      padding-top: 60px;
      padding-left:15px;
      padding-right: 15px;
    }
 .drawer-content{
   background-color: white;
  height: 100%;
 }
 .mui-bar{
   position:absolute;
   
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
.head-img{
  height:30px;
  width: 30px;
}
.head-img img{
  height: 100%;
  width: 100%;
}

.search{
    background-color:white;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index:999;
    top:0;

  }
   .search-enter {
  opacity: 0;
  transform: translateY(100%);
}

.search-leave-to {
  opacity: 0;
  transform: translateY(100%);
  position: absolute;
}

.search-enter-active,
.search-leave-active {
  transition: all 0.5s ease;
}

</style>