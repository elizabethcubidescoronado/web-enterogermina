import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/view.vue')
    },
    {
        path: '/enterogermina/01',
        name: 'Enterogermina_01',
        component: () => import('../views/enterogermina/slide01.vue')
    },
    {
        path: '/enterogermina/02',
        name: 'Enterogermina_02',
        component: () => import('../views/enterogermina/slide02.vue')
    },
    {
        path: '/enterogermina/03',
        name: 'Enterogermina_03',
        component: () => import('../views/enterogermina/slide03.vue')
    },
    {
        path: '/enterogermina/04',
        name: 'Enterogermina_04',
        component: () => import('../views/enterogermina/slider04.vue')
    },
    {
        path: '/enterogermina/05',
        name: 'Enterogermina_05',
        component: () => import('../views/enterogermina/slide05.vue')
    },
    {
        path: '/enterogermina/06',
        name: 'Enterogermina_06',
        component: () => import('../views/enterogermina/slide06.vue')
    },
    {
        path: '/enterogermina/07',
        name: 'Enterogermina_07',
        component: () => import('../views/enterogermina/slide07.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;