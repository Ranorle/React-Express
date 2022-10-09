/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 * */
//创建数据库连接对象
//导入数据库模块
const db=require('../db/index')
//导入加密模块bcryptjs
const bcrypt=require('bcryptjs')
//导入生成token的包
const jwt=require('jsonwebtoken')
//导入全局配置文件
const config=require('../config')
//处理新用户的处理函数
exports.regUser=(req,res)=>{
    //获取客户端提交到服务器用户信息
    const userInfor=req.body
    //对表单中的数据进行合理测试
   if(!userInfor.username||!userInfor.password){
        return res.send({static: 1, message:'该表单数据不合法'})
    }
    //定义sql语句，查询用户名是否被占用
    const sql = `select * from userinfo where username=?`
    db.query(sql,[userInfor.username],(err,results)=>{
        // 执行sql语句失败
        if(err) return res.cc(err)
        // 判断是否被占用
        if (results.length > 0) return res.cc('用户名被占用，请更换其他用户名!' )
        //使用bcryptjs.hashSync进行加密
        userInfor.password=bcrypt.hashSync(userInfor.password,10)
        const sql2='insert into userinfo set ?'
        db.query(sql2,{username:userInfor.username,password:userInfor.password},(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !=1) return res.cc('用户注册失败，请稍后尝试')
            res.cc('注册成功')
        })
    })
}
exports.login=(req,res)=>{
    //接受表单data
    const userinfo=req.body
    //定义sql语句
    const sql='select * from userinfo where username=?'
    //执行sql语句
    db.query(sql,userinfo.username,(err,results)=>{
        if(err) return res.cc(err)
        if(results.length!==1) return res.cc('登录失败')
        const compareresult=bcrypt.compareSync(userinfo.password,results[0].password)
        if(!compareresult) return res.cc('登录失败')
        const user={...results[0],password:'',user_pic:''}
        //对用户信息加密并生成token字符串
        const tokenStr=jwt.sign(user,config.jwtSecretKey,{expiresIn: config.expiresIn})
        res.send({status:0,
            message:'login ok',
            //为方便客户端使用，在服务器上直接拼接上Bearer前缀
            token:'Bearer '+tokenStr,})
    })
}