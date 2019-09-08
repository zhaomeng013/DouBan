<template>
    <div >
        <h3>{{shouyeData[0].title}}
            <span>{{shouyeData[0].loc_name}}</span>
        </h3>
        <div class="imgBox">
            <img :src="shouyeData[0].image" alt="">
        </div>
        <index-detail-zi title="时间:">
            <div slot="slota">{{shouyeData[0].begin_time}}</div>
            <div slot="slotb">{{shouyeData[0].end_time}}</div>
        </index-detail-zi>
         <index-detail-zi title="地点:">
            <div slot="slota">{{shouyeData[0].address}}</div>
        </index-detail-zi>
         <index-detail-zi title="费用:">
            <div slot="slota">{{shouyeData[0].fee_str}}</div>
        </index-detail-zi>
         <index-detail-zi title="类型:">
            <div slot="slota">{{shouyeData[0].category_name}}</div>
        </index-detail-zi>
         <index-detail-zi title="起始时间:">
            <div slot="slota">{{shouyeData[0].time_str}}</div>
        </index-detail-zi>  
        <detail-tags :tags="shouyetags"></detail-tags>
        <detail-content :content="shouyeData[0].content"></detail-content>
    </div>
</template>
<script>
import indexDetailZi from './IndexDetailZi'
import detailTags from './DetailTags'
import detailContent from './DetailContent'


export default {
    components:{
        indexDetailZi,
        detailTags,
        detailContent
    },
    props:{
        shouyeData:{
            type:Array,
            required:true
        }
    },
    computed: {
        shouyetags(){
            var tags
            if(this.shouyeData[0].tags.length>0){
                tags = this.shouyeData[0].tags.split(",")

            }else{
                tags=[]
            }
            return tags
        }
    },
}
</script>
<style scoped>
h3{
    margin: .18rem 0;
    color: #494949;
}
h3>span{
    /* display: block; */
    width: 0.24rem;
    height: 0.18rem;
    padding: .01rem .05rem;
    margin-bottom: .03rem;
    line-height: .18rem;
    font-size: .12rem;
    color: #fff;
    background-color: #ff8263;
    border-radius: .02rem;
}
.imgBox{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.2rem;
}
</style>