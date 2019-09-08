<template>
    <div>
        <!-- <top-search></top-search> -->
        <top-nav></top-nav>
        <bground class="bgi" lefth="打开App,浏览更多"></bground>
        <user-info ></user-info>
        <div class="clear">
            <diary v-for="(v,i) in 10" :key="i"></diary>
        </div>
        <foot></foot>
    </div>
</template>
<script>
import topNav from '../components/TopNav'
import bground from '../components/Bground'
import foot from '../components/Foot'
import userInfo from '../components/UserInfo'
import diary from '../components/Diary'





export default {
    components:{
        topNav,
        bground,
        foot,
        userInfo,
        diary
    }
}
</script>
<style lang="stylus" scoped>
.bgi{
    margin-top 0.48rem
}
.clear{
    margin-top 0rem
}
</style>