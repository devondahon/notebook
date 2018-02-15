import Vue from 'vue'
import Router from 'vue-router'

import Laravel from './components/laravel'
import Magento2 from './components/magento2'
import VueJS from './components/vuejs'

Vue.use(Router)

let routes = [
    {
        path: '/',
        redirect: '/vuejs'
    },
    {
        path: '/laravel',
        component: Laravel
    },
    {
        path: '/magento2',
        component: Magento2
    },
    {
        path: '/vuejs',
        component: VueJS
    }
]

export default new Router({
    routes,
    linkActiveClass: 'active'
});