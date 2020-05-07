<template>
    <v-container fluid>
        <v-card>
            <v-card-title class="headline">
                Itens Pessoais
                <v-spacer></v-spacer>
                <v-btn class="ma-2" color="primary" @click="Novo()">
                    <v-icon left>mdi-plus</v-icon> Novo
                </v-btn>
            </v-card-title>                    
            <v-divider></v-divider>
            <v-card-text>
                <Tabela :lista="itens" :form="form" :dialog="dialog" @AtualizarPrincipal="Atualizar"/>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    import Tabela from '@/components/idosos/itens_pessoais/Tabela'
    export default {
        components:{
            Tabela
        },
        data: () => ({
            itens: [
                {Nome: 'Camisa', Unidade: '2', Categoria: 'Pessoal'},
                {Nome: 'Pente', Unidade: '1', Categoria: 'Pessoal'},
                {Nome: 'Fralda', Unidade: '10', Categoria: 'Higiene'},
                {Nome: 'Creme Dental', Unidade: '1', Categoria: 'Higiene'}           
            ],
            // variaveis do formulario
            dialog: false,
            form: 'Novo Item',   
        }),
        methods: {
            Novo : function(){
                this.form = 'Novo Item'
                this.dialog = true
            },
            Atualizar : function(dado){
                this.dialog = dado
            }
        },
        created(){
            console.log('Parâmetros', this.$route.params)
        }
    }
</script>