var express = require("express");
var app = express();
var mongoose = require("mongoose");
var crypto =require("crypto")
var dbCollection = mongoose.model("duser",{
    email:String,
    username:String,
    passwords:String
})
var bodyParser = require("body-parser");
var uE = bodyParser.urlencoded({extended:false})

// cors解决跨域
// app.use(function(req,res,next){
//     res.header('Access-Control-Allow-Origin', '*');

//     res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');

//     next()
// })


app.post("/login",uE,function(req,res){
    // res.send("ok1")
    mongoose.connect("mongodb://localhost:27017/douban",{useNewUrlParser:true},function(err){
        if(err){
            console.log(err)
        }else{
            console.log("连接成功");
            var newPasswords = crypto.createHash('md5').update(req.body.passwords).digest('hex')

            dbCollection.find({email:req.body.email,passwords:newPasswords}).then((data)=>{
                // console.log(data.length)
                if(data.length==1){
                    res.send({status:200,msg:"登录成功"})
                }else{
                    res.send({status:200,msg:"登录失败"})
                }
            },(err)=>{
                res.send({status:500,msg:"服务器错误"})
            })
            
        }
            
        
    })
})

app.post("/reg",uE,function(req,res){
    // res.send("ok2")
    mongoose.connect("mongodb://localhost:27017/douban",{useNewUrlParser:true},function(err){
        if(err){
            console.log(err)
        }else{
            console.log("连接成功");
            var newPasswords = crypto.createHash('md5').update(req.body.passwords).digest('hex')
            dbCollection.find({email:req.body.email}).then((data)=>{
                console.log(data)
                if(data.length<=0){
                    let user1 = new dbCollection({
                        email:req.body.email,
                        username:req.body.username,
                        passwords:newPasswords
        
                    })
                    user1.save().then((ok)=>{
                        console.log("注册成功")
                        res.send({status:200,msg:"注册成功"})
                    },(err)=>{
                        console.log("注册失败")
                        res.send({status:200,msg:"注册失败"})
                    })
                }else{
                    res.send("邮箱已被注册")
                }
            },(err)=>{
                res.send({status:500,msg:"服务器端错误"})
            })
            
            
        }
           
        
    })
})



app.listen(8000)