const { Op } = require("sequelize");
const md5 = require("md5");
const UserModel = require("../model/user");
const MyError = require("../exception/index");
const { REQUEST_PARAMS_ERROR_CODE, NOT_FOUND_ERROR_CODE } = require("../exception/errorCode");

// 密码加盐
const SALT = "qianshell";

const userRegister = async (req, res, next) => {
    let user = req.body;
    let isExistUser = await UserModel.findOne({
        where: {
            [Op.or]: [{ userAccount: user.userAccount, userEmail: user.userEmail }],
            isDelete: 0,
        }
    });
    if (isExistUser) {
        return next(new MyError(REQUEST_PARAMS_ERROR_CODE, '该账号或邮箱已被注册'));
    }
    user = await UserModel.create({
        ...user,
        userPassword: md5(user.userPassword + SALT),
    });
    return res.success(user.id);
}

const userLogin = async (req, res, next) => {
    let user = req.body;
    let isExistUser = await UserModel.findOne({
        where: {
            userAccount: user.userAccount,
            isDelete: 0,
        }
    });
    if (!isExistUser) {
        return next(new MyError(NOT_FOUND_ERROR_CODE, '不存在该用户'));
    } else if (md5(user.userPassword + SALT) !== isExistUser.userPassword) {
        return next(new MyError(NOT_FOUND_ERROR_CODE, '密码错误'));
    }
    req.session.userInfo = {
        id: isExistUser.id,
        userAccount: isExistUser.userAccount,
    };
    return res.success({
        userAccount: isExistUser.userAccount,
        userName: isExistUser.userName,
        userEmail: isExistUser.userEmail
    });
}

const getLoginUser = async (req, res, next) => {
    return res.success(req.userInfo);
}

const userLogout = async (req, res, next) => {
    delete req.session.userInfo;
    return res.success(null);
}

module.exports = {
    userRegister,
    userLogin,
    getLoginUser,
    userLogout
}