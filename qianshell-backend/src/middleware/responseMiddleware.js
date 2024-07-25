module.exports = (req, res, next) => {
    // 基础返回
    res.cc = function (code, message, data) {
        res.send({
            code,
            message,
            data,
        })
    }
    // 成功返回
    res.success = function (data) {
        res.send({
            code: 200,
            message: null,
            data,
        })
    }
    // 失败返回
    res.error = function (code, message) {
        res.send({
            code,
            message,
            data: null,
        })
    }
    next();
}