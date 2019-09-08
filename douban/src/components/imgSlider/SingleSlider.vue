<template>
<div class="sliderBox">
    <h3>
        <span>{{hTit}}</span>
        <a href="#">更多</a>
    </h3>
    <div class="slider">
        <slider-content  v-for="(v,i) in movieType" :key="i" class="item" :movieTit="v.title" :movieImg="v.images.small" :movieScore="v.rating.average"></slider-content>

       <!-- {{movieData}} -->
    </div>
    
</div>
   
   
</template>
<script>
import sliderContent from './SliderContent'
export default {
    data(){
        return {
            movie:[]
        }
    },
    components:{
        sliderContent
    },
    props:{
        hTit:{
            type:String,
            required:true
        },
        movieData:{
            type:Array,
        }

    },
    computed: {

       

        // 通过传入的hTit判断获取movieData的那部分数据

        movieType(){

            var newMovie=[]
            switch(this.hTit){
                case "影院热映":  newMovie =this.movieData.filter((v,i)=>{
                                    if(i<10){
                                        return v
                                    }
                                });break
                case "免费在线观影" :  newMovie =this.movieData.filter((v,i)=>{
                                    if(i>10 && i<20){
                                        return v
                                    }
                                });break
                case "新片速递" :  newMovie =this.movieData.filter((v,i)=>{
                                    if(i>20 && i<30){
                                        return v
                                    }
                                });break


                case "豆瓣纸书" :  newMovie =this.movieData.filter((v,i)=>{
                                    if(i<5){
                                        return v
                                    }
                                });break

                
                case "最受关注图书｜虚构类" :  newMovie =this.movieData.filter((v,i)=>{
                                    if(i>5 && i<11){
                                        return v
                                    }
                                });break
                case "最受关注图书｜非虚构类" :  newMovie =this.movieData.filter((v,i)=>{
                                    if(i>12 && i<18){
                                        return v
                                    }
                                });break
                
                default:newMovie=[];break;
            }


            
            // if(this.hTit=="影院热映"){
            //     newMovie =this.movieData.filter((v,i)=>{
            //     if(i<10){
            //         return v
            //     }
            // })
            // }else if(this.hTit=="免费在线观影"){
            //     newMovie =this.movieData.filter((v,i)=>{
            //     if(i>10 && i<20){
            //         return v
            //     }
            // })
            // }else if(this.hTit=="新片速递"){
            //     newMovie =this.movieData.filter((v,i)=>{
            //     if(i>20 && i<30){
            //         return v
            //     }
            // })
            // }else if(this.hTit=="豆瓣纸书"){
            //     newMovie =this.movieData.filter((v,i)=>{
            //     if(i<10){
            //         return v
            //     }
            // })
            // }
            return newMovie
        }
    }
    
}
</script>
<style scoped>
.sliderBox{
    margin-top: .1rem;
}
h3{
    width: 100%;
    height: 0.26rem;
    font-size: .18rem;
    font-weight: 400;
    color: #111;
    padding-top: 0.1rem;
    line-height: 0.26rem;
    display: flex;
    justify-content: space-between;
}
h3>a{
    color: #42bd56;
    font-size: .14rem;
}
.slider{
    width: 100%;
    display: flex;
    overflow: auto;
    margin-top: 0.1rem;
}
.item{
    flex: 1;
    padding-right: 0.1rem;
    box-sizing: border-box;
}
</style>