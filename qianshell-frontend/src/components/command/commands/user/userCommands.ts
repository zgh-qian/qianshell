import {CommandType} from "../../command";
import registerCommand from "./subCommands/registerCommand";
import loginCommand from "./subCommands/loginCommand";
import {useUserStore} from "./userStore";
import {LOCAL_USER} from "./userConstant";
import logoutCommand from "./subCommands/logoutCommand";

/**
 * 用户命令
 */
const userCommand: CommandType = {
    func: "user",
    name: "用户",
    alias: [],
    params: [
        {
            key: "subCommand",
            desc: "子命令",
            required: true,
        },
    ],
    subCommands: {
        login: loginCommand,
        register: registerCommand,
        logout: logoutCommand,
    },
    options: [],
    async action(options, terminal) {
        const {loginUser} = useUserStore();
        if (loginUser && loginUser.userName !== LOCAL_USER.userName) {
            let text = `当前用户：${loginUser.userName}`;
            if (loginUser.userEmail) {
                text += ` ${loginUser.userEmail}`;
            }
            terminal.writeTextResult(text);
        } else {
            terminal.writeTextErrorResult("未登录，请执行 user login 命令登录");
        }
    },
};

export default [userCommand];
