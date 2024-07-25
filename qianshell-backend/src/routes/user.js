const express = require('express');
const router = express.Router();
const expressJoi = require('@escook/express-joi');
const { userRegisterSchema, userLoginSchema } = require('../schema/user');
const userHandler = require('../handler/userHandler');
const mustRole = require('../middleware/mustRole');

router.post('/register', expressJoi(userRegisterSchema), userHandler.userRegister);
router.post('/login', expressJoi(userLoginSchema), userHandler.userLogin);
router.get('/get', mustRole.mustUserRole, userHandler.getLoginUser);
router.get('/logout', mustRole.mustUserRole, userHandler.userLogout);

// 导出路由
module.exports = router;