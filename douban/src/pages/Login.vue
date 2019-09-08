<template>
    <div>
        <h1>
            <a href="#" @click.prevent="back()">取消</a>
            登录豆瓣
        </h1>
        <form action="">
             <label for="">
                <input type="text" placeholder="邮箱" v-model="email">
            </label>
            <label for="">
                <input type="text" placeholder="Token" class="iBorder" v-model="token" v-if="bool">
                <input type="password" placeholder="Token" class="iBorder" v-model="token" v-else>
                <span @click="changeType()" :class="bool?'show':'hide'"></span>

            </label>
            <input type="submit" value="登录" @click="login()">
           
            <!-- props -->
            <!-- <form-input inputType="text" placeholderTxt="邮箱"></form-input>
            <form-input inputType="text" placeholderTxt="Token" class="inputBorder">
                <span slot="bgimg"></span>
            </form-input>
            <form-input inputType="submit" valueTxt="登录"></form-input> -->
            
        </form>
        <!-- 槽口 -->
        <change-select class="download" text="使用其他方式登录 & 找回密码">
            
            <router-link to="/reg" slot="txt1">注册豆瓣账号</router-link>
            <a href="#" slot="txt2">下载豆瓣APP</a>

        </change-select>
    </div>
</template>
<script>
import changeSelect from '../components/ChangeSelect'
export default {
    data(){
        return {
            email:"",
            token:"",
            bool:false,
        }
    },
    
    methods: {
          // 密码框样式改变
        changeType(){
            this.bool=!this.bool
            
        },
        //点击logo返回
        back(){
            this.$router.push("/")
        },

        // 登录按钮
        login(){

            // 上传服务器，需删掉后台代码
            // var param = new URLSearchParams();
            // param.append("email",this.email)
            // param.append("passwords",this.token)

            // this.axios({
            //     url:"/apis/login",
            //     method:"post",
            //     data:param

            // }).then((ok)=>{

            //     if(ok.data.msg=="登录成功"){
            //         alert("登录成功")
            //         this.$router.push("/index")
            //     }else{
            //         alert("账户名或密码错误")
            //     }
                
            //     console.log(ok)
            // },(err)=>{
            //     console.log(err)
            // })



            alert("登录成功")
            this.$router.push("/")
        }
    },
    components:{
        changeSelect
    }
}
</script>
<style scoped>
div{
    width: 100%;
}
h1{
    font-size: .18rem;
    border-bottom: .01rem solid #eee;
    height: 0.45rem;
    line-height: 0.45rem;
    padding: 0 .18rem;
    text-align: center;
    position: relative;
    margin-bottom: .1rem;
}
h1>a{
    color: #42bd56;
    font-weight: 400;
    font-size: .16rem;
    position: absolute;
    left: 0.18rem;
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
    margin-right: .15rem;
    color: #42bd56;

}
</style>