import { createRouter, createWebHistory } from 'vue-router'

// Importing pages

import Admin from '../pages/AdminPage.vue'


const routes = [
    { path: '/admin', component: Admin }, // Admin page
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;