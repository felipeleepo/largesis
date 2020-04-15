<template>
    <v-autocomplete v-model="valor" :items="MostrarItens(pessoas)" :click:append-outer="Selecionar()" dense filled label="Idosos"
    ></v-autocomplete>
</template>
<script>
  export default {
    props:['lista1'],
    data: () => ({
        pessoas: [],
        medicamentos: [
            {idPessoa: '1', id: '1', descricao: 'Tylenol', qtd: 5, alerta: 1},
            {idPessoa: '1', id: '2', descricao: 'Paracetamol', qtd: 10, alerta: 5},
            {idPessoa: '2', id: '1', descricao: 'Tylenol', qtd: 12, alerta: 6},
            {idPessoa: '2', id: '2', descricao: 'Paracetamol', qtd: 99, alerta: 6}
        ],
        valor: null,
        idSelecionado: null
    }),
    methods:{
        MostrarItens: function(pessoas){
            let itens = []
            pessoas.forEach(element => {
                itens.push(element.nome + ' #' + element.id)
            });
            return itens
        },
        Selecionar(){
            if(this.valor != null){
                this.IdSelecionado = this.valor.split("#")[1]
                this.$emit('PessoaSelecionada', this.IdSelecionado)
            }
        }
    },
    created(){
        this.pessoas = this.lista1
    }
  }
</script>