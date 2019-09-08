<template>
    <div class="tagList">
        <h3>分类浏览</h3>
        
        <tag :geners="tit"></tag>
        <p>{{tit}}</p>
    </div>
</template>
<script>
import tag from './Tag'
export default {
    components:{
        tag
    },
    props:{
        titObj:{
            type:Array
            // required:true
        }
    },
    computed: {
        tit(){
            var arr=[]
            for(var i in this.titObj){
                        // 遍历的同时去重
                if(arr.indexOf(this.titObj[i].genres[0])<0){
                    arr.push(this.titObj[i].genres[0])
                }
            
            }
           
            return arr
        }
    },
}
</script>
<style scoped>
.tagList{
    font-size: 0rem;
    margin-top: .2rem;
    /* padding-bottom: .1rem; */

}
.tagList>h3{
    font-size: .18rem;
    font-weight: 400;
    margin-left: .18rem;
}
.tagList>ul{
    margin: 0.16rem 0;
}
</style>