import { createRouter, createWebHistory } from 'vue-router'


const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Dashboard.vue')
    },
    {
        path: '/transactions',
        name: 'Transactions',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/HelloWorld.vue')
    },
    {
        path: '/orders',
        name: 'Orders',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Orders.vue')
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/Perfil.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router