import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Sobre from '@/components/Sobre'
import EstoqueSaida from '@/components/estoque/saidas/Principal'
import Idosos from '@/components/idosos/Principal'
import IdososMedicamentos from '@/components/idosos/medicamentos/Principal'
import IdososItensPessoais from '@/components/idosos/itens_pessoais/Principal'
import Medicamentos from '@/components/medicamentos/Principal'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
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
            path: '/idosos/medicamentos/',
            name: 'IdososMedicamentos',
            component: IdososMedicamentos 
        },
        {
            path: '/idosos/itens-pessoais/',
            name: 'IdososItensPessoais',
            component: IdososItensPessoais 
        },
        {
            path: '/medicamentos/',
            name: 'Medicamentos',
            component: Medicamentos 
        }
    ]
})