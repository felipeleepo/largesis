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
                        <v-row v-if="form !== 'Adicionar Medicamento'">
                            <v-col cols="6">
                                <v-text-field                                    
                                    v-model="Qtd"
                                    label="Atual"
                                    type="number"
                                    :min="0"
                                    :max="QtdAtual"
                                    outlined>
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    v-model="Resultado"
                                    label="Retirada"
                                    outlined
                                    readonly>
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row v-if="form === 'Adicionar Medicamento'">
                            <v-col cols="12">
                                <v-text-field 
                                    v-model="Nome" label="Nome">
                                </v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-text-field
                                    v-model="Qtd"
                                    label="Quantidade"
                                    type="number"
                                    :min="1">
                                </v-text-field>
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
        Qtd: '',
        QtdAtual: '',
        Resultado : '',
    }),
    methods: {
        Salvar : function(){
            let item = {Id: this.Id, Nome: this.Nome, Qtd: parseInt(this.Qtd)}
            let antigo = false
            if(this.form === 'Adicionar Medicamento'){
                console.log('NOVO')
                // API Salvar
                item.Id = '999'
                // SWAL 
            }else{
                console.log('RETIRAR = ' + this.Resultado)
                antigo = this.item
                // API Retirar
                // SWAL
            }
            this.$emit('AtualizarTabela', {antigo: antigo, novo: item, dialog: false})
        }
    },
    watch : {
        dialog : function(){   
            if(this.item === undefined){
                this.Qtd = 1
                this.Id = ''        
                this.Nome = ''
                this.QtdAtual = 1
            }else{
                this.Id = this.item.Id        
                this.Nome = this.item.Nome
                this.Qtd = this.item.Qtd
                this.QtdAtual = this.item.Qtd
            }                
            this.Resultado = (parseInt(this.QtdAtual) - parseInt(this.Qtd)).toString()
        },
        Qtd : function(){
            this.Resultado = (-1 * (parseInt(this.Qtd) - parseInt(this.QtdAtual))).toString()
        }
    }
}
</script>