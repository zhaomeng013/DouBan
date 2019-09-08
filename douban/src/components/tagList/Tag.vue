<template>
    <div >
        <ul class="tag">
            <li v-for="(v,i) in geners" :key="i">
                <a href="#">{{v}}</a>
                <span></span>
            </li>
           
        </ul>
       
    </div>
</template>
<script>
export default {
    props:{
        geners:{
            type:Array,
            required:true
        }
    }
}
</script>
<style scoped>
.tag{
    margin: 0.18rem;
    margin-right: 0rem;
    overflow: hidden;
}
.tag>li{
    height: 0.42rem;
    width: 50%;
    line-height: 0.42rem;
    float: left;
    border-bottom: .01rem solid #eee;
    border-right: .01rem solid #eee;
    box-sizing: border-box;
    padding-right: .18rem;

}
.tag>li:nth-child(1),.tag>li:nth-child(2){
    border-top: .01rem solid #eee;

}
.tag>li:nth-child(2n){
    padding: 0 0.18rem;
    box-sizing: border-box;

}
.tag a{
    font-size: .14rem;
    color: #42bd56;
}
.tag span{
    float: right;
    width: 0.08rem;
    height: 0.08rem;
    border-top: .01rem solid #ccc;
    border-right: .01rem solid #ccc;
    transform: rotate(45deg);
    margin-top: .17rem;

}
</style>