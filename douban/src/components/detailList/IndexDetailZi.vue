<template>
    <div class="msg">
        <div>{{title}}&nbsp;&nbsp;</div>
        <div>
            <slot name="slota"></slot> 
            <slot name="slotb"></slot> 

        </div>
    </div>
</template>
<script>
export default {
   props:{
       title:{
           type:String,
        //    required:true
       }
   }
}
</script>
<style scoped>
.msg{
    display: flex;
    font-size: .14rem;
    margin-bottom: .1rem;
    line-height: 0.2rem;
   

}
.msg>div:first-child{
    color: #666;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.msg>div:nth-child(2){
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>