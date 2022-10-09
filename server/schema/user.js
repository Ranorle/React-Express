//导入定义验证规则的包
const joi=require('joi')
//定义用户名和密码规则
const username=joi.string().alphanum().min(1).max(10).required()
const password=joi.string().pattern(/^[\S]{6,12}$/).required()
//定义id,nickname,email的验证规则
const id=joi.number().integer().min(1).required()
const nickname=joi.string().required()
const useremail=joi.string().email().required()
const avatar=joi.string().dataUri().required()
//定义注册时表单数据的规则对象
exports.reg_login_schema={
    body:{
        username,
        password,
    }
}
//定义更改信息时表单数据的规则对象
exports.reg_updateinfo_schema={
    body:{
        id,
        nickname,
        useremail,
    }
}
//定义更改密码时表单数据的规则对象
exports.update_password_schema={
    body:{
        oldPwd:password,
        //joi.not验证req.body.newPwd的值
        //joi.ref表示值一致
        //.concat用于合并前后两条验证规则
        newPwd:joi.not(joi.ref('oldPwd')).concat(password),
    }
}
//定义更改头像时表单数据的规则对象
exports.update_avatar_schema = {
    body: {
        avatar,
    }, }
//数据验证通过后，会把这次请求转给路由
//数据验证失败会终止后续代码运行并抛出err