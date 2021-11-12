import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/home/view.vue')
    },
    {
        path: '/enterogermina/01',
        name: 'Enterogermina_01',
        component: () =>
            import ('../views/enterogermina/slide01.vue')
    },
    {
        path: '/enterogermina/02',
        name: 'Enterogermina_02',
        component: () =>
            import ('../views/enterogermina/slide02.vue')
    },
    {
        path: '/enterogermina/03',
        name: 'Enterogermina_03',
        component: () =>
            import ('../views/enterogermina/slide03.vue')
    },
    {
        path: '/enterogermina/04',
        name: 'Enterogermina_04',
        component: () =>
            import ('../views/enterogermina/slider04.vue')
    },
    {
        path: '/enterogermina/05',
        name: 'Enterogermina_05',
        component: () =>
            import ('../views/enterogermina/slide05.vue')
    },
    {
        path: '/enterogermina/06',
        name: 'Enterogermina_06',
        component: () =>
            import ('../views/enterogermina/slide06.vue')
    },
    {
        path: '/enterogermina/07',
        name: 'Enterogermina_07',
        component: () =>
            import ('../views/enterogermina/slide07.vue')
    },

    {
        path: '/dulcolax/01',
        name: 'Dulcolax_01',
        component: () =>
            import ('../views/dulcolax/slider01.vue')
    },
    {
        path: '/dulcolax/02',
        name: 'Dulcolax_02',
        component: () =>
            import ('../views/dulcolax/slider02.vue')
    },
    {
        path: '/dulcolax/03',
        name: 'Dulcolax_03',
        component: () =>
            import ('../views/dulcolax/slider03.vue')
    },
    {
        path: '/dulcolax/04',
        name: 'Dulcolax_04',
        component: () =>
            import ('../views/dulcolax/slider04.vue')
    },
    {
        path: '/dulcolax/05',
        name: 'Dulcolax_05',
        component: () =>
            import ('../views/dulcolax/slider05.vue')
    },
    {
        path: '/dulcolax/06',
        name: 'Dulcolax_06',
        component: () =>
            import ('../views/dulcolax/slider06.vue')
    },
    {
        path: '/dulcolax/07',
        name: 'Dulcolax_07',
        component: () =>
            import ('../views/dulcolax/slider07.vue')
    },
    {
        path: '/esentiale/01',
        name: 'Esentiale_01',
        component: () =>
            import ('../views/esentiale/slider01.vue')
    },
    {
        path: '/esentiale/02',
        name: 'Esentiale_02',
        component: () =>
            import ('../views/esentiale/slider02.vue')
    },
    {
        path: '/esentiale/03',
        name: 'Esentiale_03',
        component: () =>
            import ('../views/esentiale/slider03.vue')
    },
    {
        path: '/esentiale/04',
        name: 'Esentiale_04',
        component: () =>
            import ('../views/esentiale/slider04.vue')
    },
    {
        path: '/esentiale/05',
        name: 'Esentiale_05',
        component: () =>
            import ('../views/esentiale/slider05.vue')
    },
    {
        path: '/esentiale/06',
        name: 'Esentiale_06',
        component: () =>
            import ('../views/esentiale/slider06.vue')
    },
    {
        path: '/esentiale/07',
        name: 'Esentiale_07',
        component: () =>
            import ('../views/esentiale/slider07.vue')
    },
    {
        path: '/buscapina/01',
        name: 'Buscapina_01',
        component: () =>
            import ('../views/buscapina/slider01.vue')
    },
    {
        path: '/buscapina/02',
        name: 'Buscapina_02',
        component: () =>
            import ('../views/buscapina/slider02.vue')
    },
    {
        path: '/buscapina/03',
        name: 'Buscapina_03',
        component: () =>
            import ('../views/buscapina/slider03.vue')
    },
    {
        path: '/buscapina/04',
        name: 'Buscapina_04',
        component: () =>
            import ('../views/buscapina/slider04.vue')
    },
    {
        path: '/buscapina/05',
        name: 'Buscapina_05',
        component: () =>
            import ('../views/buscapina/slider05.vue')
    },
    {
        path: '/buscapina/06',
        name: 'Buscapina_06',
        component: () =>
            import ('../views/buscapina/slider06.vue')
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;