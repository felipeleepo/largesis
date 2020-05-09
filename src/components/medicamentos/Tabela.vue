<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="this.lista" :search="search" class="elevation-1" hide-default-footer>
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Medicamentos</v-toolbar-title>            
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
                    <v-btn color="primary" @click="Salvar()">
                        <v-icon left>mdi-content-save</v-icon> Salvar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.acao="{item}">
        <v-btn @click="Editar(item)" class="mx-2" fab small color="info">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn @click="Excluir(item)" class="mx-2" fab small color="error">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>
        <p>Nenhum Medicamento encontrado.</p>
      </template>
    </v-data-table>
  </v-card>  
</template>

<script>
  export default {
    props:['lista'],
    data: () => ({
      Id: '',
      Nome: '',
      Unidade: '',
      ItemEditar: false,
      valid: false,
      dialog: false,
      form: '',
      headers: [
          { text: '#', align: 'start', value: 'Id'},
          { text: 'Nome', value: 'Nome' },
          { text: 'Unidade', value: 'Unidade', align: 'center' },
          { text: 'Ação', value: 'acao', sortable: false, align: 'center' },
      ],
      search: []
    }),
    methods: {
      Novo : function(){
        this.form = 'Novo Medicamento'
        this.dialog = true

        this.Nome = ''
        this.Unidade = ''
        this.Id = ''
        this.ItemEditar = false
      },
      Editar : function(item){
        this.form = 'Editar Medicamento #' + item.Id        
        this.dialog = true    
        
        this.Nome = item.Nome
        this.Unidade = item.Unidade
        this.Id = item.Id
        this.ItemEditar = item
      },
      Salvar : function(){
        let item = {Id: this.Id, Nome: this.Nome, Unidade: this.Unidade}
        if(this.form === 'Novo Medicamento'){
          // API Salvar
          item.Id = '999'
          this.lista.push(item)
          // SWAL                
        }else{
          let indice = this.lista.indexOf(this.ItemEditar)
          this.lista.splice(indice, 1, item)
        }
        this.dialog = false            
      },
      Cancelar : function(){
        this.Id = ''        
        this.Nome = ''
        this.Unidade = ''
        this.dialog = false
      },
      Excluir : function(item){
        // API EXCLUIR
        
        // swal
        let indice = this.lista.indexOf(item)
        this.lista.splice(indice, 1)
      }
    }    
  }
</script>