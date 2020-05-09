<template>
  <v-card>
    <v-card-title>
      Idosos
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="lista"
      :search="search"
      class="elevation-1"
      hide-default-footer>
      <template v-slot:top>
        <v-toolbar flat color="white">          
          <v-toolbar-title>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Buscar"
              single-line
              hide-details>
            </v-text-field>
          </v-toolbar-title>            
          <v-spacer></v-spacer>          
          <v-dialog v-model="dialog" width="500"> 
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on" @click="Novo()">
                <v-icon>mdi-plus</v-icon> Novo
              </v-btn>
            </template>
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
                        outlined
                        readonly>
                      </v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="Resultado"
                        :min="0"
                        :max="QtdAtual"
                        label="Retirada"
                        type="number"                        
                        outlined>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row v-if="form === 'Adicionar Medicamento'">
                    <v-col cols="12">
                      <v-select 
                        v-model="NovoItem" 
                        :items="medicamentos" 
                        item-text="Nome"
                        label="Nome" 
                        return-object 
                        single-line>
                      </v-select>
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
                <v-btn color="black" text @click="Cancelar()">
                  Cancelar
                </v-btn>
                <v-btn color="primary" @click="Salvar()">
                  <v-icon left>mdi-content-save</v-icon> Salvar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>        
        </v-toolbar>
      </template>
      <template v-slot:item.acao="{item}">
        <v-btn @click="Retirar(item)" class="mx-2" small color="info">
           Retirar
        </v-btn>
      </template>
      <template v-slot:no-data>
        <p>Nenhum Idoso encontrado.</p>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      Id: '',
      Nome: '',
      Qtd: '',
      QtdAtual: '',
      Resultado : '',
      ItemEditar: false,
      NovoItem: false,
      valid: false,
      dialog: false,
      form: '',
      search: '',
      lista: [
        {Id: '1', Nome: 'Tilenol', Qtd: '1'},
        {Id: '2', Nome: 'Aspirina', Qtd: '2'}           
      ],
      medicamentos: [
        {Id: '1', Nome: 'Tilenol'},
        {Id: '2', Nome: 'Aspirina'},
        {Id: '3', Nome: 'Dipirona'}           
      ],
      headers: [
        { text: '#', align: 'start', value: 'Id'},
        { text: 'Nome', value: 'Nome' },
        { text: 'Quantidade', value: 'Qtd', align: 'center' },
        { text: 'Ação', value: 'acao', sortable: false, align: 'center' },
      ],
    }),methods: {
      Novo : function(){
        this.form = 'Adicionar Medicamento'
        this.dialog = true
        this.Nome = ''
        this.Qtd = 1
        this.Id = ''
        this.ItemEditar = false
      },
      Retirar : function(item){
        this.form = 'Medicamento #' + item.Id + ' - ' + item.Nome       
        this.dialog = true
        this.Nome = item.Nome
        this.Qtd = item.Qtd
        this.QtdAtual = item.Qtd
        this.Resultado = 0
        this.Id = item.Id
        this.ItemEditar = item
      },
      Salvar : function(){
        if(this.form === 'Adicionar Medicamento'){
          let item = {Id: this.NovoItem.Id, Nome: this.NovoItem.Nome, Qtd: this.Qtd}
          let existeElemento = false
          // API EDITAR QTD++ DE MEDICAMENTO EXISTENTE
          this.lista.forEach(element => {
            if(element.Id === item.Id){
              element.Qtd = parseInt(element.Qtd) + parseInt(item.Qtd)
              existeElemento = true              
            }
          });
          // API SALVAR NOVO MEDICAMENTO
          if(!existeElemento){
            this.lista.push(item)
          }             
        }else{                
          let indice = this.lista.indexOf(this.ItemEditar)
          // API EDITAR QTD-- DE MEDICAMENTO EXISTENTE
          // API DELETAR MEDICAMENTO QUANDO QTD = 0          
          if(parseInt(this.Qtd) > 0){
            let item = {Id: this.Id, Nome: this.Nome, Qtd: this.Qtd}
            this.lista.splice(indice, 1, item)  
          }else
            this.lista.splice(indice, 1)
        }
        this.Cancelar()           
      },
      Cancelar : function(){
        this.Id = ''        
        this.Nome = ''
        this.Qtd = ''
        this.ItemEditar = false
        this.NovoItem = false
        this.dialog = false
      }
    },
    watch: {
      Resultado : function(){
        this.Qtd = (parseInt(this.QtdAtual) - parseInt(this.Resultado)).toString()
      }
    }
  }
</script>