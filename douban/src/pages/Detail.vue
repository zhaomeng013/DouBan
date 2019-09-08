<template>
    <div>
        <top-nav></top-nav>

         <!-- 等待图片 -->
        <img class="loading" src="../../static/img/loading.gif" v-if="detailData.length<=0">

        <div v-else>
            <bground lefth="每天看点好内容" ></bground>
            <div class="detail">
            <index-detail :shouyeData="detailData"></index-detail>

        </div>
        <foot></foot>
        </div>
       
    </div>
</template>
<script>
import indexDetail from '../components/detailList/IndexDetail'
import bground from '../components/Bground'
import foot from '../components/Foot'
import topNav from '../components/TopNav'


export default {
    data(){
        return {
            detailData:[]
        }
    },
    components:{
        indexDetail,
        bground,
        foot,
        topNav
    },
    created() {
    //    console.log(this.$route.params.id) 
        this.axios({
            url:"/index",
            method:"get"
        }).then((data)=>{
            // console.log(data.data.shouye)
            this.detailData=data.data.shouye.filter((v,i)=>{
                 if(v.id==this.$route.params.id){
                    return v
                }
            })
           
        })
    }
   
}
</script>
<style  scoped>
.detail{
    padding: 0 .18rem;
    font-size: .14rem;
}
</style>