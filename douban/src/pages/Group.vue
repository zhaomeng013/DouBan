<template>
    <div class="group">
        <top-nav></top-nav>
        <div class="clear">
            
        </div>
        <!-- <star-elm></star-elm> -->
        <foot></foot>
    </div>
</template>
<script>
import TopNav from '../components/TopNav'
// import starElm from '../components/StarElm'
import foot from '../components/Foot'



export default {
    components:{
        TopNav,
        // starElm,
        foot
    }
}
</script>
<style scoped>
.group{
    width: 100%;
}
</style>