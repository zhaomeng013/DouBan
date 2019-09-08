<template>
    <div  class="tags">
        <ul>
            <li v-for="(v,i) in tags" :key="i"><a href="#">{{v}}</a></li>
            <!-- <li><a href="#">艺术展</a></li> -->
            <!-- {{tags}}    -->

        </ul>
    </div>
</template>
<script>
export default {
    props:{
        tags:{
            type:Array
        }
    }
}
</script>
<style scoped>
.tags{
    margin-top: .1rem;
}
.tags>ul{
    width: 100%;
    display: flex;
}
.tags>ul>li{
    height: 0.28rem;
    margin-right: 0.1rem;
    background-color: #f5f5f5;
    text-align: center;
    line-height: 0.28rem;
    border-radius: .28rem;
    
}
.tags>ul>li>a{
    color: #494949;
    padding: 0 0.1rem;
}
</style>