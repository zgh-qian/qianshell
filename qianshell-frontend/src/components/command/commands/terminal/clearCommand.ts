import {CommandType} from "../../command";

/**
 * 清屏命令
 */
const clearCommand: CommandType = {
    func: "clear",
    name: "清屏",
    alias: [],
    options: [],
    action(options, terminal): void {
        // 延时，把当前这条 clear 命令也清掉
        setTimeout(() => {
            terminal.clear();
        }, 100);
    },
};

export default clearCommand;
