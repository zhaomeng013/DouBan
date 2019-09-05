<template>
    <div class="foot">
        <div>
            <img src="../../static/img/logo1.png" alt="">
            <div>
                <h3>豆瓣</h3>
                <p>我们的精神角落</p>
            </div>
        </div>
       
        <a href="#">去 App Store 免费下载 iOS 客户端</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.foot{
    padding-bottom: 0.2rem;
    margin: .5rem 0 .3rem;
    font-size: .16rem;

}
.foot>div{
    display: flex;
    justify-content: center;
    margin-bottom: 0.16rem;
}
.foot>div>img{
    width: .48rem;
    height: .48rem;
    margin-right: 0.16rem;
}
.foot h3{
    font-weight: 500;
    font-size: .24rem;

}
.foot p{
    font-size: .14rem;
}
.foot>a{
    color: #42bd56;
    text-decoration: none;
    display: table;
    width: 100%;
    text-align: center;
}
</style>