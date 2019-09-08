<template>
    <div class="group">
        <top-nav></top-nav>
        <user-info class="mt"></user-info>
        <div class="clear">
            <group-list groupTit="租房找室友" :groupData="groupa"></group-list>
            <group-list groupTit="来聊五块钱的" :groupData="groupb"></group-list>
            <group-list groupTit="买买买" :groupData="groupc"></group-list>
        </div>
        <foot></foot>
    </div>
</template>
<script>
import TopNav from '../components/TopNav'
import foot from '../components/Foot'
import userInfo from '../components/UserInfo'
import groupList from '../components/GroupList'



export default {
    data(){
        return {
            groupa:[],
            groupb:[],
            groupc:[]
        }
    },
    components:{
        TopNav,
        foot,
        userInfo,
        groupList

    },
    created(){
        this.axios({
            url:"/group",
            method:"get"
        }).then((data)=>{
            this.groupa=data.data.xiaozua
            this.groupb=data.data.xiaozub
            this.groupc=data.data.xiaozuc
            console.log(data.data.xiaozua)
            console.log(data.data.xiaozub)
            console.log(data.data.xiaozuc)

        })
    }
}
</script>
<style scoped>
.group{
    width: 100%;
}
.mt{
    margin-top: 0.48rem;
}
.clear{
    margin-top: 0;
}
</style>