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
        <!-- FORM IDOSO -->
       <!-- <div class="text-center">
            <v-dialog v-model="dialog" width="500">
                <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                        {{ tipoFormulario}}
                    </v-card-title>
                    <v-card-text>
                        <v-form v-model="valid">
                            <v-text-field v-model="novoIdoso Nome" label="Nome" :rules= NomeRegras" counter="100"></v-text-field>
                            <v-text-field v-model="novoIdoso.dtNasc" label="Data de Nascimento" :rules="dtNascRegras"></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="black" text @click="dialog = false">
                            Cancelar
                        </v-btn>
                        <v-btn color="primary" @click="Salvar()" :disabled="!valid">
                            <v-icon left>mdi-content-save</v-icon> Salvar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>-->
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
                this.form = 'Novo Item'
                this.dialog = true
            },
            Atualizar : function(dado){
                this.dialog = dado
            }
        }
    }
</script>