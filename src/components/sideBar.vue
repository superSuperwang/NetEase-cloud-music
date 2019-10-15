<!-- 侧滑菜单 组件 -->
<template>
  <div>
    <transition name="fold">
      <div class="sidebar" v-show="sidebarShow">
      	侧滑菜单
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" @click.stop.prevent="hide" v-show="sidebarShow"></div>
    </transition>
  </div>
</template>
 
<script type="text/ecmascript-6">
  export default {
    //接收父组件传值
    props: {
      sidebarShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        data: [] //初始化数据
      }
    },
    //生命周期创建观察数据
    created() {
 
    },
    //观察路由跳转更新数据
    watch: {
 
    },
    methods: {
      //隐藏侧边栏,向上派发事件(向父组件传值)
      hide() {
        this.$emit('hideSidebar', false);
      }
    },
    computed: {
 
    },
    //注册组件
    components: {
 
    }
  }
</script>
<style lang="less" scoped>
  .sidebar{
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 50;
    height: 100%;
    width: 230px;
    // background-color: rgb(35, 42, 48);
    background-color: #fff;
    transform: translate3d(0, 0, 0);
  }
  .mask{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 40;
    background: rgba(7, 17, 27, 0.6);
    opacity: 1;
    &.fade-enter-active, &.fade-leave-active{
      transition: all 0.5s;
    }
    &.fade-enter, &.fade-leave-active{
      opacity: 0;
    }
  }
</style>