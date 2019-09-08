<template>
<div class="sliderCon">
    <a href="">
        <img :src="movieImg" alt="">
        <span>{{movieT}}</span>
        

    </a>
    <!-- <star :score="movieS"></star> -->
    <star-elm :elmScore="movieScore"></star-elm>
</div>
   
</template>
<script>
// import star from './Star'
import starElm from '../StarElm'
export default {
    components:{
        // star,
        starElm
    },
    props:{
        movieImg:{
            type:String,
            required:true
        },
        movieTit:{
            type:String,
            required:true
        },
        movieScore:{
            // type:Number,
            required:true
        }

    },
    computed: {
        //截取电影名字
        movieT(){
            if(this.movieTit.length>6){
                return this.movieTit.substring(0,6)+"..."

            }else{
                return this.movieTit
            }
            
            
        },
        movieS(){
            return this.movieScore.toFixed(1)
        }
        
    }
    
}
</script>
<style scoped>
.sliderCon{
    width: 100%;
}
.sliderCon img{
    width: 1.08rem;
    height: 1.52rem;
    border-radius: .04rem;
}
.sliderCon span:first-of-type{
    display: block;
    font-size: .14rem;
    font-weight: 700;
    line-height: .24rem;
    color: #191919;
    margin-top: 4px;
}


</style>