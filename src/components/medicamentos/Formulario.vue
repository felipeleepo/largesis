<template>
    <!-- FORM ITEM-->
        <v-dialog v-model="dialog" width="500"> 
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
            </template>
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
                                <v-text-field v-model="Unidade" label="Unidade"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black" text @click="Cancelar()">
                        Cancelar
                    </v-btn>
                    <v-btn color="primary" @click="Salvar()" :disabled="!valid">
                        <v-icon left>mdi-content-save</v-icon> Salvar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
  
</template>
<script>
export default {
    props: ['form', 'item', 'dialog'],
    data : () => ({
        valid: false,
        Id: '',
        Nome: '',
        Unidade: '',
        itemEditar: false,
    }),
    methods: {
        Salvar : function(){
            let item = {Id: this.Id, Nome: this.Nome, Unidade: this.Unidade}
            if(!this.itemEditar){
                // API Salvar
                item.Id = '999'
                this.$emit('AtualizarPrincipal', item)
                // SWAL                
            }else{

            }
            this.dialog = false
            
            console.log('SALVAR',this.form, item, this.itemEditar)
            this.$emit('AtualizarTabela', {antigo: this.itemEditar, novo: item})
            
        },
        Cancelar : function(){
            this.Id = ''        
            this.Nome = ''
            this.Unidade = ''
            this.dialog = false
            this.$emit('AtualizarTabela', false)
        }
    },
    watch : {
        dialog : function(){ 
            if(!this.item){
                this.Id = ''        
                this.Nome = ''
                this.Unidade = ''
            }else{
                this.Id = this.item.Id        
                this.Nome = this.item.Nome
                this.Unidade = this.item.Unidade
                this.itemEditar = this.item
            }           
        }
    }
}
</script>