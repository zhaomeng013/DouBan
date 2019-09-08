<template>
    <div>
        <top-nav></top-nav>
        <div class="clear">
            <single-slider hTit="最受关注图书｜虚构类" :movieData="books"></single-slider>
            <single-slider hTit="最受关注图书｜非虚构类" :movieData="books"></single-slider>
            <single-slider hTit="豆瓣纸书" :movieData="books"></single-slider>
            <single-slider hTit="发现好书" ></single-slider>

            <text-slider :goodMovie="goodBook"></text-slider>
            
        </div>
        <tag-list :titObj="fenlei"></tag-list>
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
            books:[],
            goodBook:[],
            fenlei:[]

        }
    },
    components:{
        topNav,
        singleSlider,
        textSlider,
        tagList,
        foot
    },
    created() {
        // 获取图书数据
        this.axios({
            url:"/book",
            method:"get"
        }).then((data)=>{
            console.log(data.data.books)
            this.books=data.data.books
        },(err)=>{
            console.log(err)
        }),

        // 获取发现好书数据
         this.axios({
            url:"/goodBook",
            method:"get"
        }).then((data)=>{
            console.log(data.data.goodBook)
            this.goodBook=data.data.goodBook
        },(err)=>{
            console.log(err)
        }),


        // 借用电影的数据单纯的获取分类浏览数据
        this.axios({
            url:"/movie",
            method:"get"
        }).then((data)=>{
            this.fenlei = data.data.movie
            console.log(data.data.movie)
        },(err)=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>

</style>