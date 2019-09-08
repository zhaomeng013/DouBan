<template>
<div class="routerList" >
    <div class="searchBar">
        <span @click="reset()">关闭</span>
        <input type="text" name="" id="">

    </div>
    <div class="con">
        <!-- <router-link to="/movie">
            <span>电影</span>  
            <span>影院热映</span>
        </router-link>
        <router-link to="/fm">
            <span>电视</span> 
            <span>正在热播</span>
        </router-link>
        <router-link to="/fm">
            <span>电视</span> 
            <span>正在热播</span>
        </router-link>
         <router-link to="/fm">
            <span>电视</span> 
            <span>正在热播</span>
        </router-link> -->
        <single-router v-for="(v,i) in routerList" :router="v.router" :tit="v.tit" :desc="v.desc" :color="v.color" :key="i"></single-router>
        <menu-list></menu-list>
    </div>
</div>
</template>
<script>
import singleRouter from './SingleRouter'
import menuList from './MenuList'

export default {

    data(){
        return {
            isshow:true,
            routerList:[
                {router:"/movie",tit:"电影",desc:"影院热映",color:"rgb(35, 132, 232)"},
                {router:"/fm",tit:"电视",desc:"正在热播",color:"rgb(122, 106, 219)"},
                {router:"/book",tit:"图书",desc:"畅销排行",color: "rgb(159, 120, 96)"},
                {router:"/",tit:"同城",desc:"周末活动",color: "rgb(230, 70, 126)"},
                {router:"/group",tit:"小组",desc:"志趣相投",color: "rgb(42, 184, 204)"},
                {router:"/",tit:"音乐",desc:"新碟榜",color: "rgb(244, 143, 46)"},
                {router:"/",tit:"阅读",desc:"电子书",color: "rgb(159, 120, 96)"},
                {router:"/",tit:"游戏",desc:"虚拟世界",color:"rgb(87, 116, 197)"},
                {router:"/",tit:"应用",desc:"玩手机",color: "rgb(89, 108, 221)"},
                {router:"/",tit:"东西",desc:"心爱之物",color: "rgb(225, 100, 77)"},
                {router:"/",tit:"FM",desc:"红心歌单",color: "rgb(64, 207, 169)"},
                {router:"/",tit:"市集",desc:"购买原创",color: "rgb(66, 189, 86)"}



            ]
        }
    },
    components:{
        singleRouter,
        menuList
    },
    methods: {
        reset(){
            this.$emit("hide",this.isshow)
          
        }
    },
    
    created() {
        console.log(this.isshow)
    },
}
</script>
<style scoped>
.routerList{
    position: fixed;
    z-index: 999;
    background-color: #fff;
    width: 100%;
    height: 100%;
}
.searchBar{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 .18rem;
    height: 0.48rem;
    border-bottom: .01rem solid #f3f3f3;
    line-height: 0.48rem;
    position: fixed;
    left: 0;
    top: 0;

}
.searchBar>span{
    color: #42bd56;
    font-size: .16rem;
    margin-right: 0.18rem;
}
.searchBar>input{
    flex: 1;
    height: 0.32rem;
    border: none;
    border-radius: .03rem;
    background: url(../../../static/img/search.png) no-repeat 50% #f3f3f3;
    background-size: .17rem;
    margin-top: .08rem;
}
.con{
    width: 100%;
    display: flex;
    /* justify-content: space-around; */
    font-size: .16rem;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 0.28rem;
}
.con>a{
    display: flex;
    flex-direction: column;
    width: 33.33%;
    margin-bottom: 0.25rem;
    
}
.con>a>span:first-child{
    font-weight: 400;
    font-size: .24rem;
    line-height: .28rem;
}
.con>a>span:last-child{
    color: #999;
    height: .18rem;
    font-size: .12rem;
    font-weight: normal;
    letter-spacing: .01rem;
}

</style>