const UserModel = require("../model/user");
const { NOT_FOUND_ERROR_CODE, NO_AUTH_ERROR_CODE } = require("../exception/errorCode");
const { UserRole } = require('../constant/user');
const MyError = require("../exception/index");


const mustUserRole = async (req, res, next) => {
    const { userInfo } = req.session;
    if (!userInfo?.id) {
        return next(new MyError(NO_AUTH_ERROR_CODE, '未登录'));
    }
    const currentUser = await UserModel.findByPk(userInfo.id);
    // 检查用户是否合法
    if (!currentUser) {
        return next(new MyError(NOT_FOUND_ERROR_CODE, '不存在该用户'));
    }
    // 检查用户状态
    if (currentUser.userRole === UserRole.BAN) {
        return next(new MyError(NO_AUTH_ERROR_CODE, '用户已被禁用'));
    }
    // 后面可以使用 userInfo
    req.userInfo = currentUser;
    next();
}

const mustAdminRole = async (req, res, next) => {
    if (req.userInfo.userRole !== UserRole.ADMIN) {
        return next(new MyError(NO_AUTH_ERROR_CODE, '权限不足'));
    }
    next();
}

module.exports = {
    mustUserRole,
    mustAdminRole
};