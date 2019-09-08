<template>
    <div>
        <top-nav></top-nav>
        <bground class="bgi" lefth="每天看点好内容"></bground>
        <div class="clear">
        </div>
        <foot></foot>
    </div>
</template>
<script>
import topNav from '../components/TopNav'
import bground from '../components/Bground'
import foot from '../components/Foot'



export default {
    components:{
        topNav,
        bground,
        foot
    }
}
</script>
<style lang="stylus" scoped>
.bgi{
    margin-top 0.48rem
}
</style>