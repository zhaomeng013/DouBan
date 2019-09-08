<template>
    <div class="router">
        <router-link :to="router">
            <span :style="style">{{tit}}</span>  
            <span>{{desc}}</span>
        </router-link>
    </div>
</template>
<script>
export default {
    // data(){
    //    return {
    //        style:{}
    //    } 
    // },
    props:{
        router:{
            type:String
        },
        tit:{
            type:String
        },
        desc:{
            type:String
        },
        color:{
            type:String
        }
    },
    computed: {
        style(){
            return {color:this.color}
        }
    },
}
</script>
<style scoped>
.router{
    width: 33.33%;
    margin-bottom: 0.25rem;

}
.router>a{
    display: flex;
    flex-direction: column;
    
}
.router>a>span:first-child{
    font-weight: 400;
    font-size: .24rem;
    line-height: .28rem;
}
.router>a>span:last-child{
    color: #999;
    height: .18rem;
    font-size: .12rem;
    font-weight: normal;
    letter-spacing: .01rem;
}
</style>