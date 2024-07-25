const express = require('express');
const router = express.Router();
const btApiHandler = require('../handler/btApiHandler');
const mustRole = require('../middleware/mustRole');

router.get('/get/random/background', mustRole.mustUserRole, btApiHandler.getRandomBackground);

// 导出路由
module.exports = router;