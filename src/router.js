import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Sobre from '@/components/Sobre'
import EstoqueSaida from '@/components/estoque/saidas/Principal'
import PessoasIdosos from '@/components/pessoas/idosos/Principal'

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
            path: '/estoque/saidas',
            name: 'EstoqueSaida',
            component: EstoqueSaida 
        },
        {
            path: '/pessoas/idosos',
            name: 'PessoasIdosos',
            component: PessoasIdosos 
        }
    ]
})