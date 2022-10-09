const express =require('express')
const router = express.Router()
const userinfo_handler=require('../router_handler/userinfo')
const expressJoi=require('@escook/express-joi')
const {reg_updateinfo_schema}=require('../schema/user')
const {update_password_schema}=require('../schema/user')
const { update_avatar_schema } = require('../schema/user')
//挂载获取用户信息的路由
//获得用户信息
router.get('/userinfo',userinfo_handler.getUserinfo)
//修改用户信息
router.post('/userinfo',expressJoi(reg_updateinfo_schema),userinfo_handler.updateUserinfor)
//修改密码
router.post('/updatepwd',expressJoi(update_password_schema),userinfo_handler.updatePassword)
//修改用户头像
router.post('/update/avatar',expressJoi(update_avatar_schema),userinfo_handler.updateAvatar)
module.exports=router