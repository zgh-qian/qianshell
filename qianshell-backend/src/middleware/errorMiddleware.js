const joi = require("joi");
const MyError = require("../exception/index");
const { REQUEST_PARAMS_ERROR_CODE, SYSTEM_ERROR_CODE } = require("../exception/errorCode");

module.exports = (err, req, res, next) => {
    if (err instanceof MyError) {
        return res.error(err.code, err.message);
    } else if (err instanceof joi.ValidationError) {
        // 验证失败导致的错误
        return res.error(REQUEST_PARAMS_ERROR_CODE, '请求参数错误');
    } else {
        // 未知的错误
        res.error(SYSTEM_ERROR_CODE, '系统错误');
    }
}