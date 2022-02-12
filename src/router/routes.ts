import { RouteRecordRaw } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";
import Index from "@/pages/Index.vue";
import NotFound from "@/pages/NotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: Index,
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: NotFound,
  },
];

export default routes;
