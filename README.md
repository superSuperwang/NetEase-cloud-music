# wyy

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




###### 日志（记录过程 可忽略不看）
##### 2019.10.16
### 一个简单的项目
    我发现网上很少有仿网易云的项目，大多都是商城项目，类似淘宝京东这种，所以可以参考的模板很少，一路磕磕碰碰

#### 到目前为止用到的新东西不多
  +用vue-cli脚手架搭建的项目
  +用到了以vue为基础的mint-ui组件）
  +侧滑菜单，GitHub上的开源组件 vue-drawerLayout
  +后台服务器，GitHub上的开源服务器

####  解决搜索界面显示消失动画问题（主页面右上角按钮）
  
  +刚开始把搜索界面设计成组件，然后用transition设置动画，发现只有离开的动画没有进入的动画
    -后面才想通，刚开始页面是没有搜索组建的Dom元素的，当然也就作用不到它身上了
    -所以直接设计成遮罩层

