<template>
    <div class="groupList">
        <h3>{{groupTit}}</h3>
        <div class="con" v-for="(v,i) in groupData" :key="i">
            <div >
                <img :src="v.images.small" alt="">
                <h4>{{v.title}}</h4>
            </div>
            <p>
                <span>{{v.group_topic.time}}</span>
                <span>{{v.group_topic.title}}</span>
            </p>
        </div>
        <p> <a href="">更多相关小组</a> </p>
    </div>
</template>
<script>
export default {
    props:{
        groupTit:{
            type:String
        },
        groupData:{
            type:Array
        }
    }
}
</script>
<style scoped>
.groupList{
    width: 100%;
    font-size: .16rem;
   
    
}
.groupList>p{
    margin-bottom: .3rem;
    font-size: .16rem;
    text-align: center;
   
}
.groupList>p>a{
 color: #42bd56;
}
.con{
     border-bottom: .01rem solid #f2f2f2;
     margin-bottom: 0.15rem;
}
.groupList>h3{
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: .16rem;
    font-weight: 400;
    color: #111;
}

.con>div{
    display: flex;
}
.con>div>h4{
    font-size: .18rem;
    color: #111;
    font-weight: normal;
    line-height: 0.4rem;
}
.con>div>img{
    width: 0.4rem;
    height: 0.4rem;
    margin-right: 0.1rem;
}
.con>p{
    margin: .1rem 0;
    font-size: .14rem;
    color: #aaa;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>