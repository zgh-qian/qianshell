import myAxios from "../../../../plugins/myAxios";

/**
 * 用户登录
 * @param userAccount
 * @param userPassword
 */
export const userLogin = async (userAccount: string, userPassword: string) => {
    if (!userAccount || !userPassword) {
        return null;
    }
    return await myAxios.post("/user/login", {userAccount: userAccount, userPassword: userPassword});
};

/**
 * 用户注销
 */
export const userLogout = async () => {
    return await myAxios.get("/user/logout");
};

/**
 * 用户注册
 * @param userAccount
 * @param userPassword
 * @param userName
 * @param userEmail
 */
export const userRegister = async (
    userAccount: string,
    userPassword: string,
    userName: string,
    userEmail: string
) => {
    if (!userAccount || !userPassword || !userName || !userEmail) {
        return null;
    }
    return await myAxios.post("/user/register", {
        userAccount: userAccount,
        userPassword: userPassword,
        userName: userName,
        userEmail: userEmail
    });
};

/**
 * 获取当前登录用户
 */
export const getLoginUser = async () => {
    return await myAxios.get("/user/get");
};
