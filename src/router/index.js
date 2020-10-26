import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/article.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/en',
    },
    {
        path: '/:lang',
        component: Home,
        props: true,
        params: true,
    },
    {
        path: '/fr',
        component: Home,
        props: true,
        params: true,
    },
    {
        path: '/article/:id',
        name: 'article',
        component: Article,
        props: true,
        params: true,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router