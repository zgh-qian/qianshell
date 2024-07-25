const express = require('express');
const router = express.Router();
const translatorHandler = require('../handler/translatorHandler');
const mustRole = require('../middleware/mustRole');

router.post('/', mustRole.mustUserRole, translatorHandler.translator);

// 导出路由
module.exports = router;