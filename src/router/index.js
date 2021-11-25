import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/HomePage.vue'
import Legalities from '/src/views/LegalPage.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: Home,
    },
    {
        path: '/legalities',
        name: 'LegalityPage',
        component: Legalities,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
