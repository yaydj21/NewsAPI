// 导入 express模块
const express = require('express');

// 创建express服务器实例
const app = express();

// 导入跨域中间件cors
const cors = require('cors');
app.use(cors());

// 配置解析表单数据的中间件 只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({extended:false}));


// 一定要在路由之前配置解析Token的中间件
const expressJWT = require('express-jwt');
const config =require('./config');

// // unless 除了/api的路由接口都要身份验证
// app.use(expressJWT({secret:config.jwtSecretKey,algorithms: ['HS256']}).unless({path:[/^\/api/]}));


// 在这写代码

// 导入用户路由模块
const userRouter = require('./router/user');
app.use('/api',userRouter);

// 导入新闻数据路由模块
const newsRouter = require('./router/news');
app.use('/api',newsRouter);

// 导入文章内容数据路由模块
const articlesRouter = require('./router/articles');
app.use('/api',articlesRouter);

// 调用app.listen方法，指定端口号并启动web服务器
app.listen(3007,() =>{
    console.log('api server run at http://127.0.0.1:3007');
});