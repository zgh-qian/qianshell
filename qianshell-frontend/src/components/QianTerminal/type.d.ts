declare namespace QianTerminal {
    /**
     * 输出状态
     */
    type OutputStatusType = "info" | "success" | "warning" | "error" | "system";

    /**
     * 输出类型
     */
    interface OutputType {
        type: "command" | "text" | "component";
        text?: string;
        resultList?: OutputType[];
        component?: any;
        status?: OutputStatusType;
        props?: any;
        collapsible?: boolean;
    }

    /**
     * 命令类型输出
     */
    interface CommandOutputType extends OutputType {
        type: "command";
        text: string;
        resultList: OutputType[];
    }

    /**
     * 文本类型输出
     */
    interface TextOutputType extends OutputType {
        type: "text";
        text: string;
    }

    /**
     * 组件类型输出
     */
    interface ComponentOutputType extends OutputType {
        type: "component";
        component: any;
        props?: any;
    }

    /**
     * 命令输入类型
     */
    interface CommandInputType {
        text: string;
        placeholder?: string;
    }

    /**
     * 终端类型（定义一组访问及操作终端的方法）
     */
    interface TerminalType {
        /**
         * 清屏
         */
        clear: () => void;

        /**
         * 立刻输出
         * @param output
         */
        writeOutput: (output: OutputType) => void;

        /**
         * 立刻输出文本
         * @param text
         * @param status
         */
        writeTextOutput: (text: string, status?: OutputStatusType) => void;

        /**
         * 写命令文本结果
         * @param text
         * @param status
         */
        writeTextResult: (text: string, status?: OutputStatusType) => void;

        /**
         * 写命令文本错误结果
         * @param text
         */
        writeTextErrorResult: (text: string) => void;

        /**
         * 写命令文本成功结果
         * @param text
         */
        writeTextSuccessResult: (text: string) => void;

        /**
         * 写命令结果
         * @param output
         */
        writeResult: (output: OutputType) => void;

        /**
         * 聚焦输入框
         */
        focusInput: () => void;

        /**
         * 获取输入框是否聚焦
         */
        isInputFocused: () => boolean;

        /**
         * 设置输入框的值
         */
        setTabCompletion: () => void;

        /**
         * 提交命令
         */
        doSubmitCommand: () => void;

        /**
         * 显示下一个命令
         */
        showNextCommand: () => void;

        /**
         * 显示上一个命令
         */
        showPrevCommand: () => void;

        /**
         * 查看命令历史
         */
        listCommandHistory: () => CommandOutputType[];

        /**
         * 展开/折叠所有
         */
        toggleAllCollapse: () => void;

        /**
         * 设置命令是否可折叠
         */
        setCommandCollapsible: (collapsible: boolean) => void;
    }
}