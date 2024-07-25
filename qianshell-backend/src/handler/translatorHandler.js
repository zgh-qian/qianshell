const MyError = require("../exception/index");
const { REQUEST_PARAMS_ERROR_CODE, NOT_FOUND_ERROR_CODE, NO_AUTH_ERROR_CODE } = require("../exception/errorCode");
const baiduFanYi = require('../thirdpart/baiduFanyi');

const translator = async (req, res, next) => {
    const { keywords, config } = req.body;
    if (!keywords) {
        return next(new MyError(REQUEST_PARAMS_ERROR_CODE, '请输入要翻译的内容'));
    }
    const result = await baiduFanYi(keywords, config);
    res.success(result);
}

module.exports = {
    translator
}