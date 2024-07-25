// 导入定义验证规则的包
const joi = require('joi');

// 用户注册校验
exports.userRegisterSchema = {
    body: {
        userAccount: joi.string().alphanum().min(4).max(10).required(),
        userPassword: joi.string().pattern(/^[\S]{6,12}$/).required(),
        userName: joi.string().alphanum().min(1).max(32).required(),
        userEmail: joi.string().email().required(),
    }
}
// 用户登录校验
exports.userLoginSchema = {
    body: {
        userAccount: joi.string().alphanum().min(4).max(10).required(),
        userPassword: joi.string().pattern(/^[\S]{6,12}$/).required(),
    }
}