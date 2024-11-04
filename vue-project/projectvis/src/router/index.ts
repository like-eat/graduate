// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import UpLoad from "@/components/UpLoad.vue";
import EmptyPage from "@/components/EmptyPage.vue";

const routes = [
  {
    path: "/",
    name: "UpLoad",
    component: UpLoad,
  },
  {
    path: "/empty",
    name: "EmptyPage",
    component: EmptyPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
