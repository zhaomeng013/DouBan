<template>
    <div>
        <p>{{text}}</p>
        <slot name="txt1"></slot>
        <slot name="txt2"></slot>
    </div>
</template>
<script>
export default {
   props:{
       text:{
           type:String
       }
   }
}
</script>
<style scoped>
div{
    font-size: .16rem;
    color: #42bd56;
    font-size: .14rem;
}
p{
    width: 100%;
    font-size: .14rem;
    text-align: center;
    color: #aaa;
    margin-bottom: .4rem;
}


</style>