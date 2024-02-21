import Home from '../views/Home.vue'
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.Base_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});

export default router;
