import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListaView from "../views/ListaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/listao",
      name: "listao",
      component: ListaView,
    },
  ],
});

export default router;
