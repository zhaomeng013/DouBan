<template>
    <div class="starBox">
        <span class="star">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
        <span class="score">{{score}}</span>
    </div>
   
</template>
<script>
export default {
    props:{
        score:{
            type:String
        }
    }
    
}
</script>
<style scoped>
.starBox{
    font-size: 0rem;
}
.star>span{
    display: inline-block;
    width: 0.1rem;
    height: 0.1rem;
    background: url(../../../static/img/star1.png) no-repeat center;
    background-size: .1rem;
}
.star>span:last-child{
    background: url(../../../static/img/star2.png) no-repeat center;
    background-size: .1rem;


}
.score{
    font-size: .12rem;
    font-weight: 500;
    color: #818181;
    padding: 3px 0;
    margin: -3px 0;
    margin-left: 4px;
}

</style>