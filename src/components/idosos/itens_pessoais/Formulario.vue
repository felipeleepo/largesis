<template>
    <!-- FORM ITEM-->
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    {{ form }}
                </v-card-title>
                <v-card-text>
                    <v-form v-model="valid">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="Nome" label="Nome"></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field v-model="Unidade" label="Unidade(s)"></v-text-field>
                            </v-col>
                            <v-col cols="8">
                                <v-select v-model="Categoria" :items="tipo" :item-value="Categoria" label="Categoria" return-object single-line></v-select>/
                            </v-col>
                        </v-row>
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
</template>
<script>
export default {
    props: ['form', 'item', 'dialog'],
    data : () => ({
        tipo: [ 'Higiene', 'Pessoal'],
        valid: false,
        Nome: '',
        Unidade: '',
        Categoria: ''
    }),
    methods: {
        Salvar : function(){
            let item = {Nome: this.Nome, Unidade: this.Unidade, Categoria: this.Categoria}
            let antigo = false
            if(this.form === 'Novo Item'){
                console.log('NOVO')
                // API Salvar
                // SWAL
                
            }else{
                console.log('EDITAR')
                // API Editar
                antigo = this.item
                // SWAL
            }
            this.$emit('AtualizarTabela', {antigo: antigo, novo: item, dialog: false})
        }
    },
    watch : {
        dialog : function(){
            if(this.item === undefined){            
                this.Nome = ''
                this.Unidade = 1
                this.Categoria = ''
            }else{
                this.Nome = this.item.Nome
                this.Unidade = this.item.Unidade
                this.Categoria = this.item.Categoria
            }
        }
    }
}
</script>