const mysql=require('mysql')
// 创建数据库连接对象
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port:'3306',
    password: 'Dsy030325!',
    database: 'mydb01',
    multipleStatements: true // 设置可以同时查询多条语句
})
module.exports=db
