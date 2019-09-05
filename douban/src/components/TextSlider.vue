<template>
    <div class="movieList">
        <div>                           
                <a  v-for="(v,i) in goodMovie" :key="i"  href="" :style="{'color':v.color}" v-if="!v.line">
                    {{ v.title }}
                </a><br v-else>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            style:{},
            br:true
        }
    },
    props:{
        goodMovie:{
            type:Array
        }
    }
    
}
</script>
<style scoped>
.movieList{
    width: 100%;
    font-size: .16rem;


}
.movieList>div{
    overflow: auto;
    width: 100%;
    white-space: nowrap;

}
a{
    display: inline-block;
    overflow: hidden;
    border: .01rem solid rgb(255, 172, 45);
    border-radius: .04rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    letter-spacing: .01rem;
    margin-bottom: 0.08rem;
    margin-right: 0.16rem;
    padding: 0 .2rem;


}

</style>