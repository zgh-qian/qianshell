import {CommandType} from "../../../command";
import {defineAsyncComponent} from "vue";
import ComponentOutputType = QianTerminal.ComponentOutputType;

/**
 * 快捷键命令

 */
const shortcutCommand: CommandType = {
    func: "shortcut",
    name: "快捷键",
    desc: "查看快捷键",
    alias: [],
    params: [],
    options: [],
    collapsible: true,
    action(options, terminal): void {
        const output: ComponentOutputType = {
            type: "component",
            component: defineAsyncComponent(() => import("./ShortcutBox.vue")),
        };
        terminal.writeResult(output);
    },
};

export default shortcutCommand;
