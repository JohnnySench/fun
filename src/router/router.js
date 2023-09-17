import Main from "../pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/photos',
        component: () => import('../pages/PhotoPage.vue') // lazy loading
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;