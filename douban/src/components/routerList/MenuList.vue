<template>
    <div class="list">
        <router-link to="/reg"> <span>注册账号</span> </router-link>
        <router-link to="/login"> <span>登录豆瓣</span> </router-link>
        <router-link to="/"> <span>使用桌面版</span> </router-link>
        <router-link to="/"> <span>使用豆瓣App</span>   </router-link>

    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.list>a{
    width: 50%;
    font-size: .14rem;
    color: #42bd56;
    padding: .1rem 0;
    border-top: .01rem solid #f3f3f3;
    box-sizing: border-box;
}
.list>a>span:nth-child(2n-1){
    display: inline-block;
    width: 100%;
    border-right:  .01rem solid #e5e5e5;;
}
</style>