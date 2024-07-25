<template>
  <QianTerminal
      ref="terminalRef"
      :user="loginUser"
      full-screen
      :on-submit-command="onSubmitCommand"
  />
</template>

<script setup lang="ts">
import {doCommandExecute} from "../components/command/commandExecutor";
import {onMounted, ref} from "vue";
import {useUserStore} from "../components/command/commands/user/userStore";
import {storeToRefs} from "pinia";
import QianTerminal from "../components/QianTerminal/QianTerminal.vue";

const terminalRef = ref();

const onSubmitCommand = async (inputText: string) => {
  if (!inputText) {
    return;
  }
  const terminal = terminalRef.value.terminal;
  await doCommandExecute(inputText, terminal);
};

const userStore = useUserStore();
const {loginUser} = storeToRefs(userStore);

onMounted(() => {
  userStore.getAndSetLoginUser();
});
</script>

<style></style>
