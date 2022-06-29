const express = require('express');

const router = express.Router();

const newsHandler = require('../router_handler/news_handler');

router.get('/news',newsHandler.getNews);

module.exports = router;