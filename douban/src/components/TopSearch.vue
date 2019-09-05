<template>
    <div class="searchBar">
        <span @click="reset()">关闭</span>
        <input type="text" name="" id="">
    </div>
</template>
<script>
export default {
    methods: {
        reset(){
            this.$router.push("Movie")
        }
    },
}
</script>
<style scoped>
.searchBar{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 .18rem;
    height: 0.48rem;
    border-bottom: .01rem solid #f3f3f3;
    line-height: 0.48rem;
    position: fixed;
    left: 0;
    top: 0;

}
.searchBar>span{
    color: #42bd56;
    font-size: .16rem;
    margin-right: 0.18rem;
}
.searchBar>input{
    flex: 1;
    height: 0.32rem;
    border: none;
    border-radius: .03rem;
    background: url(../../static/img/search.png) no-repeat 50% #f3f3f3;
    background-size: .17rem;
    margin-top: .08rem;
}

</style>