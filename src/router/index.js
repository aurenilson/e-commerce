import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/checkout",
            name: "checkout",
            component: () => import("../views/Checkout.vue"),
        },
        {
            path: "/pedidos",
            name: "pedidos",
            component: () => import("../views/Pedidos.vue"),
        },
        {
            path: "/perfil",
            name: "perfil",
            component: () => import("../views/Perfil.vue"),
        },
        {
            path: "/privacidade",
            name: "privacidade",
            component: () => import("../views/Privacidade.vue"),
        },
        {
            path: "/cookies",
            name: "cookies",
            component: () => import("../views/Cookies.vue"),
        },
        {
            path: "/institucional",
            name: "institucional",
            component: () => import("../views/Institucional.vue"),
        },
        {
            path: "/recuperacao",
            name: "recuperacao",
            component: () => import("../views/Recuperacao.vue"),
        }
    ],
});

export default router;
