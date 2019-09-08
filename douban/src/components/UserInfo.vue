<template>
    <div class="userInfo">
        <div>
            <img src="../../static/img/user.jpg" alt="">
            <p>请先登录</p>

        </div>
        <div>
            <i class="el-icon-edit"></i>
            <i class="el-icon-camera"></i>
            
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.userInfo{
    height: 0.6rem;
    padding: 0.1rem 0.18rem ;
    font-size: .16rem;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    border-bottom: .01rem solid #f3f3f3;
}
.userInfo>div{
    display: flex;
    line-height: 0.4rem;
}
.userInfo>div>p{
    color: #aaa;
    line-height: 0.4rem;
    margin-left: .1rem;
}
.userInfo>div>img{
    border-radius: 50%;
    width: 0.4rem;

}
.el-icon-edit,.el-icon-camera{
    width: .24rem;
    height: .24rem;
    background-position: 50%;
    font-size: .3rem ;
    color: #ddd;
    line-height: 0.4rem;
     
}
.el-icon-edit{
    margin-right: .3rem;

}
</style>