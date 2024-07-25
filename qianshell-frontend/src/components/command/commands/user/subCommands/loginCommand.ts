import {CommandType} from "../../../command";
import {userLogin} from "../userApi";
import {useUserStore} from "../userStore";

/**
 * 用户登录命令
 */
const loginCommand: CommandType = {
    func: "login",
    name: "用户登录",
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
    ],
    async action(options, terminal) {
        const {userAccount, userPassword} = options;
        if (!userAccount) {
            terminal.writeTextErrorResult("请输入账号");
            return;
        }
        if (!userPassword) {
            terminal.writeTextErrorResult("请输入密码");
            return;
        }
        const res: any = await userLogin(userAccount, userPassword);
        const {setLoginUser} = useUserStore();
        if (res?.code === 200) {
            setLoginUser(res.data);
            terminal.writeTextSuccessResult("登录成功");
        } else {
            terminal.writeTextErrorResult(res?.message ?? "登录失败");
        }
    },
};

export default loginCommand;
