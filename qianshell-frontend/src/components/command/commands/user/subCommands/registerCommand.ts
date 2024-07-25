import {CommandType} from "../../../command";
import {userRegister} from "../userApi";

/**
 * 用户注册命令
 */
const registerCommand: CommandType = {
    func: "register",
    name: "用户注册",
    options: [
        {
            key: "userAccount",
            desc: "账号",
            alias: ["u"],
            type: "string",
            required: true,
        },
        {
            key: "userPassword",
            desc: "密码",
            alias: ["p"],
            type: "string",
            required: true,
        },
        {
            key: "userName",
            desc: "用户名",
            alias: ["n"],
            type: "string",
            required: true,
        },
        {
            key: "userEmail",
            desc: "邮箱",
            alias: ["e"],
            type: "string",
            required: true,
        },
    ],
    async action(options, terminal) {
        const {userAccount, userPassword, userName, userEmail} = options;
        if (!userAccount) {
            terminal.writeTextErrorResult("请输入用户名");
            return;
        }
        if (!userPassword) {
            terminal.writeTextErrorResult("请输入密码");
            return;
        }
        if (!userName) {
            terminal.writeTextErrorResult("请输入邮箱");
            return;
        }
        if (!userEmail) {
            terminal.writeTextErrorResult("请输入邮箱");
            return;
        }
        const res: any = await userRegister(userAccount, userPassword, userName, userEmail);
        if (res?.code === 200) {
            terminal.writeTextSuccessResult("注册成功");
        } else {
            terminal.writeTextErrorResult(res?.message ?? "注册失败");
        }
    },
};

export default registerCommand;
