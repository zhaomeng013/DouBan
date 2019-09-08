<template>
    <div class="bground">
        <span>{{lefth}}</span>
        <div class="bgRight">
            <span>极速下载</span>
            <span>打开</span>
        </div>
       

    </div>
</template>
<script>
export default {
    props:{
        lefth:{
            type:String
        }
    }
}
</script>
<style scoped>
.bground{
    margin-top: 0.48rem;
    width: 100%;
    height: .8rem;
    background-image: url(../../static/img/loading.jpg);
    background-size: 100% .8rem;
    line-height: 0.8rem;
    font-size: .14rem;
    display: flex;
    justify-content: space-between;
    color: #2ca532;

}
.bground>span:first-child{
    padding-left: .38rem;
}
.bgRight{
    margin-right: .2rem;
}
.bgRight>span{
    display: inline-block;
    font-weight: 600;
    font-size: .12rem;
    padding: 0 .14rem;
    line-height: 0.26rem;
    border-radius: .03rem;
    
}
.bgRight>span:first-child{
    color: #fff;
    background-color:  #42bd56;
   
    
    
}
.bgRight>span:last-child{
    border: .01rem solid #42bd56;

}
</style>