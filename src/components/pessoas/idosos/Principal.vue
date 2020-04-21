<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="12" md="12">
                <v-card>
                    <v-card-title class="headline">
                        Cadastro de Idosos
                        <v-spacer></v-spacer>
                        <v-btn class="ma-2" color="primary" @click="dialog = true">
                            <v-icon left>mdi-plus</v-icon> Novo
                        </v-btn>
                    </v-card-title>                    
                    <v-divider></v-divider>
                    <v-card-text>
                        <Tabela :lista1="idosos" :tipoFormulario="tipoFormulario" @Editar="Editar" @Excluir="Excluir"/>
                    </v-card-text>
                </v-card>
            </v-col>            
        </v-row>

        <!-- FORM IDOSO -->
        <div class="text-center">
            <v-dialog v-model="dialog" width="500">
                <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                        {{ tipoFormulario}}
                    </v-card-title>
                    <v-card-text>
                        <v-form v-model="valid">
                            <v-text-field v-model="novoIdoso.nome" label="Nome" :rules="nomeRegras" counter="100"></v-text-field>
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
        </div>
    </v-container>
</template>
<script>
    import Tabela from '@/components/pessoas/idosos/Tabela'
    export default {
        components:{
            Tabela
        },
        data: () => ({
            idosos: [
                {id: '1', nome: 'Margarete', dtNasc: '11/11/1111'},
                {id: '2', nome: 'Francisco', dtNasc: '11/11/1111'}           
            ],
            // variaveis do formulario
            dialog: false,
            tipoFormulario: 'Novo Idoso',
            nome: '',
            nomeRegras: [
                v => !!v || 'Nome é obrigatório',
                v => v.length < 100 || 'Nome muito grande',
            ],
            dtNasc: '',
            dtNascRegras: [
                v => !!v || 'Data é obrigatória',
                v => v.length == 10 || 'Data inválida',
            ],
            valid: false,
            novoIdoso: {
                id: '',
                nome: '',
                dtNasc: ''
            },
            indiceEditado: null

        }),
        methods: {
            Salvar : function(){
                if(this.tipoFormulario === 'Novo Idoso'){
                    // Novo valor estático, necessário pegar o id no banco
                    this.novoIdoso.id = 999
                    this.idosos.push(this.novoIdoso)
                    this.dialog = false

                    //swal

                }else{
                    this.idosos.splice(this.indiceEditado, 1, this.novoIdoso)
                    this.dialog = false

                    //swal

                    // reseta variavel apos edicao
                    this.novoIdoso = { id: '', nome: '', dtNasc: ''}
                    this.tipoFormulario = 'Novo Idoso'
                }
            },
            Editar : function(dados){                
                this.novoIdoso = dados.obj
                this.tipoFormulario = dados.form
                this.dialog = true
                this.indiceEditado = this.idosos.indexOf(this.novoIdoso)
            },
            Excluir : function(dados){  
                let indice = this.idosos.indexOf(dados)              
                this.idosos.splice(indice, 1)
            }
        }
    }
</script>