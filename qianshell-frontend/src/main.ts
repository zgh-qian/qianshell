import {createApp} from "vue";
import * as VueRouter from "vue-router";
import {createPinia} from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import routes from "./routes/index";

const app = createApp(App);

// 路由
const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes,
});
app.use(router);

// 状态管理
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia).mount("#app");
