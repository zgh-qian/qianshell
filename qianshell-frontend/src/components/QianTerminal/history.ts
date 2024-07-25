import {ref, Ref} from "vue";
import CommandOutputType = QianTerminal.CommandOutputType;
import CommandInputType = QianTerminal.CommandInputType;


const useHistory = (
    commandList: CommandOutputType[],
    inputCommand: Ref<CommandInputType>
) => {
    // 当前查看命令位置
    const commandHistoryPos = ref(commandList.length);

    /**
     * 返回命令历史列表
     */
    const listCommandHistory = () => {
        return commandList;
    }

    /**
     * 查看下一个命令
     */
    const showNextCommand = () => {
        console.log(commandHistoryPos.value, commandList, inputCommand);
        if (commandHistoryPos.value < commandList.length - 1) {
            commandHistoryPos.value++;
            inputCommand.value.text = commandList[commandHistoryPos.value].text;
        } else if (commandHistoryPos.value === commandList.length - 1) {
            commandHistoryPos.value++;
            inputCommand.value.text = "";
        }
    }

    /**
     * 查看上一个命令
     */
    const showPrevCommand = () => {
        console.log(commandHistoryPos.value, commandList, inputCommand);
        if (commandHistoryPos.value > 0) {
            commandHistoryPos.value--;
            inputCommand.value.text = commandList[commandHistoryPos.value].text;
        }
    }
    return {
        commandHistoryPos,
        listCommandHistory,
        showNextCommand,
        showPrevCommand
    }
}

export default useHistory;