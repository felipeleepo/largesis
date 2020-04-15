<template>
    <div>
        <div class="col-md-12">
            <AutoCompletar :lista1="pessoas" @PessoaSelecionada="PessoaSelecionada"/>
        </div>
        <div class="col-md-12">
            <Tabela :lista2="medicamentosPorPessoa"/>
        </div>
    </div> 
</template>
<script>
    import AutoCompletar from '@/components/Estoque/AutoCompletar.vue'
    import Tabela from '@/components/Estoque/Tabela.vue'
    export default {
        components:{
            AutoCompletar, Tabela
        },
        data: () => ({
            pessoas: [
                {id: '1', nome: 'Margarete'},
                {id: '2', nome: 'Francisco'}           
            ],
            medicamentos: [
                {idPessoa: '1', id: '1', descricao: 'Tylenol', qtd: 5, alerta: 1},
                {idPessoa: '1', id: '2', descricao: 'Paracetamol', qtd: 10, alerta: 5},
                {idPessoa: '2', id: '1', descricao: 'Tylenol', qtd: 12, alerta: 6},
                {idPessoa: '2', id: '2', descricao: 'Paracetamol', qtd: 99, alerta: 6}
            ],
            medicamentosPorPessoa: []
        }),
        methods:{
            PessoaSelecionada(IdSelecionado){
                let filtrados = []
                this.medicamentos.forEach(element => {
                    if(element.idPessoa === IdSelecionado)
                        filtrados.push(element)
                });
                this.medicamentosPorPessoa = filtrados
            }
        }
    }
</script>