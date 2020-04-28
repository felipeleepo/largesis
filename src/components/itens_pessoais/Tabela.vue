<template>
  <div>
    <v-card>
      <v-card-title>
        <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="this.lista" :search="search" group-by="Categoria" class="elevation-1" hide-default-footer>
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
    <Formulario :form="form" :dialog="dialog" :item="item" @AtualizarTabela="Atualizar"/>
  </div>
</template>

<script>
  import Formulario from '@/components/itens_pessoais/Formulario'
  export default {
    props:['lista', 'form', 'dialog'],
    components: { Formulario },
    data: () => ({
        search: '',
        headers: [
          { text: 'Nome', value: 'Nome' },
          { text: 'Unidade(s)', value: 'Unidade', align: 'center' },
          { text: 'Categoria', value: 'Categoria'},
          { text: 'Ação', value: 'acao', sortable: false, align: 'center' },
        ],
        item: null  
    }),
    methods: {
      Editar : function(item){
        this.form = 'Editar Item'
        this.item = item
        this.dialog = true
      },
      Excluir : function(item){
        // API EXCLUIR
        
        // swal
        let indice = this.lista.indexOf(item)
        this.lista.splice(indice, 1)
        this.$emit('AtualizarPrincipal', false)
      },
      Atualizar : function(dado){
        if(!dado.antigo){
          this.lista.push(dado.novo)
        }else{
          let indice = this.lista.indexOf(dado.antigo)
          this.lista.splice(indice, 1, dado.novo)
        }
        this.$emit('AtualizarPrincipal', false)
      }
      
    },
  }
</script>