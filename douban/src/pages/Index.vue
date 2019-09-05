<template>
    <div>

        <top-nav></top-nav>

        <div class="con clear">
            <ul class="navList">
                <li><router-link to="/Movie">影院热映</router-link></li>
                <li><router-link to="/FM">欧美新碟榜</router-link></li>
                <li><router-link to="/Reg">注册账号 </router-link></li>
                <li><router-link to="/Login">登录豆瓣</router-link></li>
            </ul>
            <!-- 等待图片 -->
            <img class="loading" src="../../static/img/loading.gif" v-if="dataList.length<=0">

            <media-object :data=dataList v-else></media-object>
            <!-- <menu-nav v-show="isMenu"></menu-nav> -->

            
        </div>
        
    </div>
</template>
<script>
// $(document).ready(function(){
//     alert("jquery引入成功")
// })
import topNav from '../components/TopNav'
import mediaObject from '../components/MediaObject'
// import menuNav from '../components/MenuNav'


export default {
    data(){
        return {
            dataList:[],
            isMenu:false
        }
    },
    components:{
        topNav,
        mediaObject,
        // menuNav
    },
    created() {
        this.axios({
            url:"/index",
            method:"get"
        }).then((data)=>{
            console.log(data.data.shouye)
            this.dataList=data.data.shouye
        },(err)=>{
            console.log(err)
        })
        
    }
}
</script>
<style scoped>
.con{
    width: 100%;
}
.navList{
    width: 100%;
    height: 1rem;
    font-size: .16rem;
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.18rem;

}
.navList>li{
    width: 50%;
    flex-shrink: 0;
    text-align: center;
    padding: .03rem;
    box-sizing: border-box;
    line-height: .44rem;
    display: flex;

}
.navList>li>a{
    flex: 1;
    background-color: #f6f6f6;
    color: #494949;
}
.loading{
    margin-left: 40%;
}
</style>