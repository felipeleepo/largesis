import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Sobre from '@/components/Sobre'
import Idosos from '@/components/idosos/Tabela'
import IdososEstoque from '@/components/idosos/estoque/Tabela'
import IdososItensPessoais from '@/components/idosos/itens_pessoais/Tabela'
import Medicamentos from '@/components/medicamentos/Tabela'


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
            path: '/idosos',
            name: 'Idosos',
            component: Idosos 
        },
        {
            path: '/idosos/estoque/',
            name: 'IdososEstoque',
            component: IdososEstoque 
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