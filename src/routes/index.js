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
    {
        path: '/allegra/01',
        name: 'Allegra_01',
        component: () =>
            import ('../views/allegra/slider01.vue')
    },
    {
        path: '/allegra/02',
        name: 'Allegra_02',
        component: () =>
            import ('../views/allegra/slider02.vue')
    },
    {
        path: '/allegra/03',
        name: 'Allegra_03',
        component: () =>
            import ('../views/allegra/slider03.vue')
    },
    {
        path: '/allegra/04',
        name: 'Allegra_04',
        component: () =>
            import ('../views/allegra/slider04.vue')
    },
    {
        path: '/allegra/05',
        name: 'Allegra_05',
        component: () =>
            import ('../views/allegra/slider05.vue')
    },
    {
        path: '/allegra/06',
        name: 'Allegra_06',
        component: () =>
            import ('../views/allegra/slider06.vue')
    },
    {
        path: '/allegra/07',
        name: 'Allegra_07',
        component: () =>
            import ('../views/allegra/slider07.vue')
    },
    {
        path: '/allegra/08',
        name: 'Allegra_08',
        component: () =>
            import ('../views/allegra/slider08.vue')
    },
    {
        path: '/allegra/09',
        name: 'Allegra_09',
        component: () =>
            import ('../views/allegra/slider09.vue')
    },
    {
        path: '/allegra/10',
        name: 'Allegra_10',
        component: () =>
            import ('../views/allegra/slider10.vue')
    },
    {
        path: '/pharmaton/01',
        name: 'Pharmaton_01',
        component: () =>
            import ('../views/pharmaton/slider01.vue')
    },
    {
        path: '/pharmaton/02',
        name: 'Pharmaton_02',
        component: () =>
            import ('../views/pharmaton/slider02.vue')
    },
    {
        path: '/pharmaton/03',
        name: 'Pharmaton_03',
        component: () =>
            import ('../views/pharmaton/slider03.vue')
    },
    {
        path: '/pharmaton/04',
        name: 'Pharmaton_04',
        component: () =>
            import ('../views/pharmaton/slider04.vue')
    },
    {
        path: '/pharmaton/05',
        name: 'Pharmaton_05',
        component: () =>
            import ('../views/pharmaton/slider05.vue')
    },
    
    
    
    
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;