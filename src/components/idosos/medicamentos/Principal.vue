<template>
    <v-container fluid>
        <v-card>
            <v-card-title class="headline">
                Medicamentos
                <v-spacer></v-spacer>
                <v-btn class="ma-2" color="primary" @click="dialog = true">
                    <v-icon left>mdi-plus</v-icon> Adicionar
                </v-btn>
            </v-card-title>                    
            <v-divider></v-divider>
            <v-card-text>
                <Tabela :lista="medicamentos" :form="form" :dialog="dialog" @AtualizarPrincipal="Atualizar"/>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    import Tabela from '@/components/idosos/medicamentos/Tabela'
    export default {
        components:{
            Tabela
        },
        data: () => ({
            medicamentos: [
                {Id: '1', Nome: 'Tilenol', Qtd: '1'},
                {Id: '2', Nome: 'Aspirina', Qtd: '2'}           
            ],
            // variaveis do formulario
            dialog: false,
            form: 'Adicionar Medicamento',            
        }),
        methods: {
            Adicionar : function(){
                this.form = 'Adicionar Medicamento'
                this.dialog = true
            },
            Atualizar : function(dado){
                this.dialog = dado
            }
        }
    }
</script>