// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import UploadPage from "@/components/UpLoad.vue";
import SuccessPage from "@/components/SuccessPage.vue";

const routes = [
  {
    path: "/",
    name: "UploadPage",
    component: UploadPage,
  },
  {
    path: "/success",
    name: "SuccessPage",
    component: SuccessPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
