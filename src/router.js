import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Sobre from '@/components/Sobre'
import EstoqueSaida from '@/components/estoque/saidas/Principal'
import Idosos from '@/components/idosos/Principal'
import Medicamentos from '@/components/idosos/medicamentos/Principal'
import ItensPessoais from '@/components/idosos/itens_pessoais/Principal'


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
            path: '/idosos',
            name: 'Idosos',
            component: Idosos 
        },
        {
            path: '/medicamentos/',
            name: 'Medicamentos',
            component: Medicamentos 
        },
        {
            path: '/itens-pessoais/',
            name: 'ItensPessoais',
            component: ItensPessoais 
        }
    ]
})