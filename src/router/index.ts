// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    component: () => import("@/views/AboutPage.vue"),
  },
  {
    path: "/projects",
    component: () => import("@/views/ProjectsPage.vue"),
  },
  {
    path: "/contact",
    component: () => import("@/views/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
