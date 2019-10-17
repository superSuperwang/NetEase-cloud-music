<template>
<div class="find">
<router-view></router-view>
<!--轮播-->
<mt-swipe :auto="4000">
  <mt-swipe-item><img src="../images/1.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="../images/2.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="../images/3.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="../images/4.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="../images/5.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="../images/6.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="../images/7.jpg" alt=""></mt-swipe-item>
 
</mt-swipe>

<!--九宫格-->
<div id="nine">
  <router-link to="/find/recommend" tag='div' class="small"><div class="taricon"><img src="../images/t_dragonball_icn_daily.png" alt=""></div> <span>每日推荐</span></router-link>
  <router-link to="/find/recommend" tag='div' class="small"><div class="taricon"><img src="../images/t_dragonball_icn_playlist.png" alt=""></div><span>歌单</span></router-link>
   <router-link to="/find/recommend" tag='div' class="small"><div class="taricon"><img src="../images/t_dragonball_icn_rank.png" alt=""></div><span>排行榜</span></router-link>
    <router-link to="/find/recommend" tag='div' class="small"><div class="taricon"><img src="../images/t_dragonball_icn_radio.png" alt=""> </div><span>电台</span></router-link>
     <router-link to="/find/recommend" tag='div' class="small"><div class="taricon"><img src="../images/t_dragonball_icn_look.png" alt=""></div> <span>直播</span></router-link>
     
</div>


<div class="list">
  <span class="ss">推荐歌单</span>
  <ul class="list-ul">
    
    <li v-for="(item,index) in musicList" :key="index">
       <div  class="top">
         <img src="../images/akj.png" alt="">
         <span>{{item.playCount | count}}</span>
       </div>
        <img :src="item.coverImgUrl" alt="">
       <span>{{item.name}}</span>
    </li>
    
    </ul>
</div>


</div>
    
</template>
<script>

export default {
  name:"find",
    data(){
      return{
         musicList:[]
      }
    },
    created(){
     
    },
   mounted(){
    this.axios({
      method: "get",
       url:'/api/top/playlist/highquality?limit=6', 
        })
      .then((res)=> {
       console.log(res.data.playlists)
       this.musicList=res.data.playlists
      })
      .catch((error)=> {
       console.log(error);
      });
   },
    methods:{
       
    },
    filters:{
        count(data){ 
           var data=data.toString()
          if(data.length<5){
            return data
          }else if(data.length>=5&&data.length<9){   
           var del=data.slice(-4)
           var result=data.replace(del,'万')
           return result
          }else{
           var del=data.slice(-8)
           var result=data.replace(del,'亿')
           return result
          }
        }
    }

    
}
</script>
<style  scoped>
*{
  margin:0;
  padding:0;
}

.find{ 
  width: 100%;
  height: 100%;
}
.mint-swipe{
  height: 200px;
}
.mint-swipe img{
  border-radius: 3%;
  width: 100%;
  height: 100%;
}

#nine{
  justify-content: center; /*子元素水平居中*/
  display: -webkit-flex;
  margin-top:10px ;
}
.small{
  border-bottom: 1px solid ghostwhite;
  margin-bottom: 20px;
}
.small span{
  font-size: small;
  text-align: center;
  display:block;
  margin: 10px 0;
  color:grey;
   
}

.taricon{
  width:50px;
  height: 50px;
  background-color: rgb(211,58,49);
  float: left;
  margin: 10px 23px;
  border-radius: 50%;
  justify-content: center; /*子元素水平居中*/
  align-items: center; /*子元素垂直居中*/
  display: -webkit-flex;
  cursor: pointer;
}

.taricon img{
  
  width: 90%;
  height: 90%;
}
.list{
  width: 100%;
 
}
.list .ss{
  display: block;
  color:black;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.list-ul{
  width: 100%;
  list-style: none;
  margin-right:-14px;
  overflow:hidden
}

.list-ul li{
  float: left;
  width:30% ;
  position: relative;
}
.list-ul li:nth-child(3n-1){
  margin:0 21px;
}

.list-ul li img{
  border-radius: 5%;
  width:100%;
}
.list-ul li>span{
  font-size: small;
  color:gray;
}
.list-ul li .top{
  position:absolute;
  right: 3px;
  z-index: 5;
  align-items: center; /*子元素垂直居中*/
  display: -webkit-flex;
}
.list-ul li .top img{
  width: 20px;
 
}
.list-ul li .top span{
  color:white;
  font-size: 14px;
}
</style>