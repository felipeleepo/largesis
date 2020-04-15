import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import Sobre from '@/components/Sobre.vue'
import Estoque from '@/components/Estoque/Principal.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard 
        },
        {
            path: '/sobre',
            name: 'Sobre',
            component: Sobre 
        },
        {
            path: '/estoque',
            name: 'Estoque',
            component: Estoque 
        }
    ]
})