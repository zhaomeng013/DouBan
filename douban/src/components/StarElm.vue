<template>
    <div id="elmBox">
        <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#818181"
            :score-template="v">
        </el-rate>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value:0,
    
        }
    },
    computed: {

        // 乘以二 保留一位小数，
        v(){
            return (this.value*2).toFixed(1)
        },

        
    },
    props:{
        elmScore:{
            // type:Number,
            required:true
        }
    },

    // 处理请求回来的分数  除以二
    created() {
        this.value=this.elmScore/2
    },
    

}
</script>
<style>
#elmBox{
    font-size: 0rem;
    color: #818181;
    margin-right: 0rem;
    margin-left: -0.02rem;
    margin-top: 0.03rem;
}

#elmBox .el-rate__icon{
    margin-right: -0.01rem;
    font-size: .12rem;

}
#elmBox .el-rate__text{
    font-size: .12rem;
    font-weight: 500;
    margin-left: .05rem;
}
</style>