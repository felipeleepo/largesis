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
                                <v-text-field v-model="dtNasc" label="Data de Nascimento"></v-text-field>
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
        valid: false,
        Id: '',
        Nome: '',
        dtNasc: '',
    }),
    methods: {
        Salvar : function(){
            let item = {Id: this.Id, Nome: this.Nome, dtNasc: this.dtNasc}
            let antigo = false
            if(this.form === 'Novo Idoso'){
                console.log('NOVO')
                // API Salvar
                item.Id = '999'
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
                this.Id = ''        
                this.Nome = ''
                this.dtNasc = '00/00/0000'
            }else{
                 this.Id = this.item.Id        
                this.Nome = this.item.Nome
                this.dtNasc = this.item.dtNasc
            }           
        }
    }
}
</script>