<template>
    <div>
       <top-nav></top-nav>
       <div class="clear">
        <single-slider hTit="影院热映" :movieData="movie"></single-slider>
        <single-slider hTit="免费在线观影" :movieData="movie"></single-slider>
        <single-slider hTit="新片速递" :movieData="movie"></single-slider>
        <single-slider hTit="发现好电影" :movieData="movie"></single-slider>

        <text-slider :goodMovie="findMovie"></text-slider>
        
       </div>
    

       <tag-list :titObj="movie"></tag-list>
       <foot></foot>
    </div>
</template>
<script>
import topNav from '../components/TopNav'
import singleSlider from '../components/imgSlider/SingleSlider'
import textSlider from '../components/TextSlider'
import tagList from '../components/tagList/tagList'
import foot from '../components/Foot'






export default {
    data(){
        return {
            // 前面三个movie汇总
            movie:[],
            // 最后一个发现好电影
            findMovie:[]
        }
    },
    components:{
        // 顶部导航
        topNav,
        // 电影轮播
        singleSlider,
        // 发现好电影
        textSlider,
        // 分类浏览
        tagList,
        foot
    },
    created() {
        //请求前面三个电影接口
        this.axios({
            url:"/movie",
            method:"get"
        }).then((data)=>{
            this.movie = data.data.movie
            console.log(data.data.movie)
        },(err)=>{
            console.log(err)
        }),

        // 请求最后一个电影接口
        this.axios({
            url:"/findMovie",
            method:"get"
        }).then((data)=>{
            this.findMovie = data.data.faxianhaodianying
            console.log(data.data.faxianhaodianying)
        },(err)=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
</style>