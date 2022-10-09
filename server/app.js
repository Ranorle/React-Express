const express=require('express')
const app=express()
const cors =require('cors')
const userRouter=require('./router/user')
const joi=require('joi')
const config=require('./config')
app.use(cors())
app.use(express.urlencoded({ extended: false }))
//定义封装res.cc中间件
app.use((req,res,next)=>{
    res.cc=(err,status=1)=>{
        res.send({
            status,
            message:err instanceof Error ? err.message : err,
        })
    }
    next()
})
//在路由之前配置解析Token中间件
const expressjwt=require('express-jwt')
//指定那些接口不需要进行token身份认证
app.use(expressjwt({secret:config.jwtSecretKey}).unless({path:[/^\/api/]}))
//导入登录api模块
app.use('/api',userRouter)
//导入使用用户信息的模块
const userinfoRouter=require('./router/userinfo')
app.use('/my',userinfoRouter)
//定义全局错误中间件
app.use((err, req, res, next)=>{
    //验证失败导致错误
    if(err instanceof joi.ValidationError) return res.cc(err)
    //Token error
    if(err.name==='UnauthorizedError') return res.cc('身份认证失败')
    //其他未知错误
    res.cc('1'+err)
})
app.listen(4399,()=>{
    console.log('Server running at http://localhost:4399')
})
