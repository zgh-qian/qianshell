const express = require('express');
const router = express.Router();
const MyError = require("../exception/index");

// ping
router.get('/ping', (req, res) => {
    res.send('pong')
})
// 捕获同步异常
router.get('/error/sync', (req, res) => {
    throw new MyError(500, 'Error sync');
})
// 捕获异步异常
router.get('/error/async', async (req, res, next) => {
    next(new MyError(500, 'Error async'));
})

// 导出路由
module.exports = router;