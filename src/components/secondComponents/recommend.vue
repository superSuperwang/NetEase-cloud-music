<template>
<div class='daily'>
 <div class=""></div>
</div>
    
</template>
<script>
export default {
    name:"mine",
    data(){
    return{
       dailyList:[

       ]
    }
    },
    created(){
        this.axios({
            method:'get',
            url:'api/recommend/resource'
        }).then((res)=>{
           console.log(res)
        })
    },
    methods:{
        
    }
    
}
</script>
<style scoped>
.daily{
position:absolute;
top:0;
left:0;
z-index:999;
width: 100%;
height: 100%;
background-color: white;
}

</style>