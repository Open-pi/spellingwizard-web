import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/HomePage.vue'
import Legalities from '/src/views/LegalPage.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: Home,
        meta: {
            enterActiveClass: "animate__animated animate__fadeInLeft",
            leaveActiveClass: "animate__animated animate__fadeOutRight",
        }
    },
    {
        path: '/legalities',
        name: 'LegalityPage',
        component: Legalities,
        meta: {
            enterActiveClass: "animate__animated animate__fadeInRight",
            leaveActiveClass: "animate__animated animate__fadeOutLeft",
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
