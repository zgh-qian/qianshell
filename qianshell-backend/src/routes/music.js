const express = require('express');
const router = express.Router();
const musicHandler = require('../handler/musicHandler');
const mustRole = require('../middleware/mustRole');

router.get('/get', mustRole.mustUserRole, musicHandler.getSingleMusicApi);
router.get('/list/host', mustRole.mustUserRole, musicHandler.getPlaylistDetailApi);

// 导出路由
module.exports = router;