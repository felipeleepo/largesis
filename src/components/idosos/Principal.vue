<template>
    <v-container fluid>
        <v-card>
            <v-card-title class="headline">
                Idosos
                <v-spacer></v-spacer>
                <v-btn class="ma-2" color="primary" @click="dialog = true">
                    <v-icon left>mdi-plus</v-icon> Novo
                </v-btn>
            </v-card-title>                    
            <v-divider></v-divider>
            <v-card-text>
                <Tabela :lista="idosos" :form="form" :dialog="dialog" @AtualizarPrincipal="Atualizar"/>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    import Tabela from '@/components/idosos/Tabela'
    export default {
        components:{
            Tabela
        },
        data: () => ({
            idosos: [
                {Id: '1', Nome: 'Margarete', dtNasc: '11/11/1111'},
                {Id: '2', Nome: 'Francisco', dtNasc: '11/11/1111'}           
            ],
            // variaveis do formulario
            dialog: false,
            form: 'Novo Idoso',            
        }),
        methods: {
            Novo : function(){
                this.form = 'Novo Medicamento'
                this.dialog = true
            },
            Atualizar : function(dado){
                this.dialog = dado
            }
        }
    }
</script>