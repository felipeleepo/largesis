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
        <v-btn :to="{ name: 'IdososEstoque', params: { Id: item.Id }}" class="mx-2" small color="green">
          Medicamentos
        </v-btn>
        <v-btn :to="{ name: 'IdososItensPessoais', params: { Id: item.Id }}" class="mx-2" small color="green">
          Itens Pessoais
        </v-btn>
        <v-btn @click="Editar(item)" class="mx-2" fab small color="info">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn @click="Excluir(item)" class="mx-2" fab small color="error">
          <v-icon>mdi-delete</v-icon>
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
      dtNasc: '',
      ItemEditar: false,
      valid: false,
      dialog: false,
      form: '',
      search: '',
      lista: [
        {Id: '1', Nome: 'Margarete', dtNasc: '11/11/1111'},
        {Id: '2', Nome: 'Francisco', dtNasc: '11/11/1111'}           
      ],
      headers: [
        { text: '#', align: 'start', value: 'Id',},
        { text: 'Nome', value: 'Nome' },
        { text: 'Data de Nascimento', value: 'dtNasc', align: 'center' },
        { text: 'Ação', value: 'acao', sortable: false, align: 'center' },
      ],
    }),methods: {
      Novo : function(){
        this.form = 'Novo Idoso'
        this.dialog = true

        this.Nome = ''
        this.dtNasc = ''
        this.Id = ''
        this.ItemEditar = false
      },
      Editar : function(item){
        this.form = 'Editar Idoso #' + item.Id        
        this.dialog = true    
        
        this.Nome = item.Nome
        this.dtNasc = item.dtNasc
        this.Id = item.Id
        this.ItemEditar = item
      },
      Salvar : function(){
        let item = {Id: this.Id, Nome: this.Nome, dtNasc: this.dtNasc}
        if(this.form === 'Novo Idoso'){
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
        this.dtNasc = ''
        this.ItemEditar = false
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