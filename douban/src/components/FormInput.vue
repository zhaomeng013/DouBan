<template>
    <div>
        
        <input :type="inputType" :value="valueTxt" :placeholder="placeholderTxt">

        <!-- 具名插槽 -->
        <slot name="bgimg"></slot>
    </div>
</template>
<script>
export default {   
    props:{
        inputType:{
            type:String,
            required:true
        },
        valueTxt:{
            type:String
        },
        placeholderTxt:{
            type:String
        }
        
    }
}
</script>
<style scoped>
div{
    font-size: 0;
    position: relative;
}
input{
    width: 100%;
    height: .44rem;
    padding: 0.08rem;
    box-sizing: border-box;
    background: #fff;
    border: .01rem solid #ccc;
    border-bottom: none;
    border-top-left-radius: .03rem;
    border-top-right-radius: .03rem;
    font-size: .16rem;
    outline: none;
}

input[type=submit]{
        background: #42bd56;
        color: #fff;
        font-size: .18rem;
        cursor: pointer;
        border: .01rem solid #17aa52;
        border-radius: .03rem;
        margin-top: .1rem;

}

span{
    display: inline-block;
    height: .44rem;
    width: .32rem;
    background: url(../../static/img/show.png) no-repeat .06rem .11rem;
    background-size: .22rem;
    position: absolute;
    left: 90%;
    top: 0rem;

}
</style>