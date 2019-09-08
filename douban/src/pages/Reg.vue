<template>
    <div class="regForm">
        <p class="welcome">欢迎加入豆瓣</p>
        <form action="">
            <label for="">
                <input type="text" placeholder="邮箱" v-model="email">
            </label>
            <label for="">
                <input type="text" placeholder="密码"  v-model="passwords" v-if="bool">
                <input type="password" placeholder="密码"  v-model="passwords" v-else>
                <span @click="changeType()" :class="bool?'show':'hide'"></span>

            </label>
            
            <label for="">
                <input type="text" placeholder="用户名" v-model="userName" class="iBorder">

            </label>
            
            <input type="submit" value="立即注册" @click="reg()">

            

            <!-- <form-input inputType="text" placeholderTxt="邮箱"></form-input>
            <form-input inputType="text" placeholderTxt="密码">
                <span slot="bgimg"></span>
            </form-input>
            <form-input inputType="text" placeholderTxt="用户名"  class="inputBorder"></form-input>
            
            <div @click="reg()">
               <form-input inputType="submit" valueTxt="立即注册" fun="bb"></form-input> 
            </div> -->
            
        </form>
        <!-- 槽口   props -->
        <change-select class="download" text="点击「注册」代表你已阅读并同意用户使用协议">
            <a href="#" slot="txt1">下载豆瓣APP</a>
        </change-select>


    </div>
</template>
<script>
import changeSelect from '../components/ChangeSelect'

export default {
    data(){
        return {
            email:"",
            passwords:"",
            userName:"",
            //密码框样式改变
            bool:false 
        }
    },
    components:{
        changeSelect
    },

    methods: {
        // 密码框样式改变
        changeType(){
            this.bool=!this.bool
            
        },
        reg(){


            // 上传服务器，需删掉后台代码
            
            // var param = new URLSearchParams();
            // param.append("email",this.email)
            // param.append("passwords",this.passwords)
            // param.append("username",this.userName)

            // this.axios({
            //     url:"/apis/reg",
            //     method:"post",
            //     data:param
            // }).then((ok)=>{
            //     if(ok.data.msg=="注册成功"){
            //          alert("注册成功")
            //          this.$router.push("/login")
            //     }else{
            //         alert("注册失败")
            //     }
               
            // },(err)=>{
            //     console.log(err)
            // })



             alert("注册成功")
            this.$router.push("/login")
        }
    },
}
</script>
<style scoped>
.regForm{
    width: 100%;
}
.welcome{
    width: 100%;
    font-size: .4rem;
    color: #42bd56;
    text-align: center;
    font-weight: 100;
    margin: 10% 0 9%;
}
form{
    padding: .2rem .15rem;
    font-size: 0;
}
input{
    width: 100%;
    height: .44rem;
    padding: 0.08rem;
    box-sizing: border-box;
    background: #fff;
    border: .01rem solid #ccc;
    border-bottom: none;
    border-top-left-radius: .03rem;
    border-top-right-radius: .03rem;
    font-size: .16rem;
    outline: none;
}

.iBorder{
    border-bottom: .01rem solid #ccc
}

input[type=submit]{
        background: #42bd56;
        color: #fff;
        font-size: .18rem;
        cursor: pointer;
        border: .01rem solid #17aa52;
        border-radius: .03rem;
        margin-top: .1rem;

}
label{
    position: relative;
}
span{
    display: inline-block;
    height: .44rem;
    width: .32rem;
    position: absolute;
    left: 90%;
    top: -0.25rem;

}
.show{
    background: url(../../static/img/show.png) no-repeat .06rem .11rem;
    background-size: .22rem;

}
.hide{
    background: url(../../static/img/hide.png) no-repeat .06rem .11rem;
    background-size: .22rem;

}
.download{
    text-align: center;
}
.download a{
    color: #42bd56;
}

</style>