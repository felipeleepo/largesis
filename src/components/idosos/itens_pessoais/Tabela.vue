<template>
  <v-card>
    <v-card-title>
      <v-card-title>Itens Pessoais</v-card-title>
    </v-card-title>
    <v-data-table :headers="headers" :items="this.lista" :search="search" group-by="Categoria" class="elevation-1" hide-default-footer>
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
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="Nome" label="Nome"></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field v-model="Unidade" label="Unidade(s)"></v-text-field>
                    </v-col>
                    <v-col cols="8">
                      <v-select 
                        v-model="Categoria"
                        :items="tipo" 
                        :item-value="Categoria" 
                        label="Categoria" 
                        return-object 
                        single-line>
                      </v-select>
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
        <p>Nenhum Item encontrado.</p>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
        Id: '',
        Nome: '',
        Unidade: '',
        Categoria: '',
        tipo: [ 'Higiene', 'Pessoal'],
        ItemEditar: false,
        valid: false,
        dialog: false,
        form: '',
        search: '',
        lista: [
          {Nome: 'Camisa', Unidade: '2', Categoria: 'Pessoal'},
          {Nome: 'Pente', Unidade: '1', Categoria: 'Pessoal'},
          {Nome: 'Fralda', Unidade: '10', Categoria: 'Higiene'},
          {Nome: 'Creme Dental', Unidade: '1', Categoria: 'Higiene'}           
        ],
        headers: [
          { text: 'Nome', value: 'Nome' },
          { text: 'Unidade(s)', value: 'Unidade', align: 'center' },
          { text: 'Categoria', value: 'Categoria'},
          { text: 'Ação', value: 'acao', sortable: false, align: 'center' },
        ],
    }),
    methods: {
      Novo : function(){
        this.form = 'Novo Item'
        this.dialog = true

        this.Id = ''
        this.Nome = ''
        this.Unidade = ''
        this.Categoria = ''
        this.ItemEditar = false
      },
      Editar : function(item){
        this.form = 'Editar Item #' + item.Id        
        this.dialog = true            
        
        this.Id = item.Id
        this.Nome = item.Nome
        this.Unidade = item.Unidade
        this.Categoria = item.Categoria
        this.ItemEditar = item
      },
      Salvar : function(){
        let item = {Id: this.Id, Nome: this.Nome, Unidade: this.Unidade, Categoria: this.Categoria}
        if(this.form === 'Novo Item'){
          // API Salvar
          item.Id = '999'
          this.lista.push(item)
          // SWAL                
        }else{
          let indice = this.lista.indexOf(this.ItemEditar)
          this.lista.splice(indice, 1, item)
        }
        this.Cancelar()           
      },
      Cancelar : function(){
        this.Id = ''        
        this.Nome = ''
        this.Unidade = ''
        this.Categoria = ''
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