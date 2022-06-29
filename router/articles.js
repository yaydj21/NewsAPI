const express = require('express');

// 创建路由对象
const router = express.Router();

// 导入文章路由处理函数
const articlesHandler = require('../router_handler/artilces_handler');

// 获取文章内容
router.get('/articles/:art_id',articlesHandler.getArticles);

module.exports = router;

