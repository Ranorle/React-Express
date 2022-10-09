const db = require('../db/index')
const sql = 'select id,username,nickname,email,user_pic from userinfo where id=?'
const bcrypt=require('bcryptjs')
//获取用户信息方法
exports.getUserinfo = (req, res) => {
    // console.log(req.user)
    db.query(sql,req.user.id, (err, results) => {
        if (err) return res.cc(err)
        if(results.length!==1)return res.cc('获取用户信息失败')
        res.send({
            status:0,
            message:'获取用户信息成功',
            data:results[0],
        })
            })
}
//更改用户信息方法(通过id)
const sql2='update userinfo set ? where id=?'
exports.updateUserinfor=(req,res)=>{
    db.query(sql2,[req.body,req.body.id],(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows!==1) return res.cc('修改用户基本信息失败')
        return res.cc('修改用户信息成功',0)
    })
}
//更改密码(通过id)
const sql3='select * from userinfo where id=?'
const sql4='update userinfo set password=? where id=?'
exports.updatePassword=(req,res)=>{
    //查看用户是否存在
    db.query(sql3,req.user.id,(err,results)=> {
        if (err) return res.cc('用户不存在')
        //判断旧密码是否正确
        const passwordresult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!passwordresult) return res.cc('旧密码错误')
    })
    const newPwd=bcrypt.hashSync(req.body.newPwd,10)
    db.query(sql4,[newPwd,req.user.id],(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows!==1) return res.cc('更新密码失败')
        res.cc('密码更新成功',0)
    })
}
//更改头像
const sql5='update userinfo set user_pic=? where id=?'
exports.updateAvatar=(req,res)=>{
    db.query(sql5, [req.body.avatar, req.user.id], (err, results) => { // 执行 SQL 语句失败
        if (err) return res.cc(err)
// 执行 SQL 语句成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('更新头像失败!')
// 更新用户头像成功
        return res.cc('更新头像成功!', 0) })
}