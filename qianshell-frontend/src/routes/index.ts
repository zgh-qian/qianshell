import { RouteRecordRaw } from "vue-router";
import IndexPage from "../pages/IndexPage.vue";

const index: RouteRecordRaw[] = [
  { path: "/", component: IndexPage },
];

export default index;
