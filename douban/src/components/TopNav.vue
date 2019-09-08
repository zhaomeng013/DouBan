<template>
<div>
    <div class="topNav">
        <router-link to="/" class="logo"><img src="../../static/img/logo.png" alt="" v-if="!isMenu"></router-link>
        
        <ul>
            <li><router-link to="/Movie" style="color: rgb(35, 132, 232)">电影</router-link></li>
            <li><router-link to="/Book"  style="color: rgb(159, 120, 96)">图书</router-link></li>
            <li><router-link to="/FM" style="color: rgb(228, 168, 19);">广播</router-link></li>
            <li><router-link to="/Group" style="color: rgb(42, 184, 204);">小组</router-link></li>
        </ul>
        <img class="menu" src="../../static/img/menu.png" @click="showMenu()" >
    </div>
    
    <top-search v-show="isMenu" @hide="fun()"></top-search>
    
</div>
</template>
<script>
import topSearch from './routerList/TopSearch'

export default {
    components:{
        topSearch
    },
    data(){
        return {
            isMenu:false
        }
    },
    methods: {
        showMenu(){
            this.isMenu=true
            
            
        },
        fun(val){
            this.isMenu=val
        }
       
    },
}
</script>
<style scoped>
.topNav{
    position: fixed;
    left: 0rem;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 0.49rem;
    background-color: #fff;
    border-bottom: .01rem solid #f3f3f3;
    box-sizing: border-box;
    padding: 0 .18rem;
    font-size: .16rem;
    justify-content: space-between;
    display: flex;


}

.topNav .menu{
    width: 0.24rem;
    height: 0.18rem;
}
.topNav .logo img{
    width: 0.46rem;
    height: 0.22rem;
    margin-top: 0.12rem;
}
.topNav .menu{
    width: 0.24rem;
    height: 0.18rem;
    margin-top: 0.15rem;
}
.topNav>ul{
    display: flex;
    flex: 1;
    justify-content: flex-end;

}
ul>li{
    font-size: .16rem;
    margin-right: 0.12rem;
    line-height: 0.48rem;
}


</style>