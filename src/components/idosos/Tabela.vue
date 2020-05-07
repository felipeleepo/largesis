<template>
<div>
  <v-card>
    <v-card-title>
      <v-text-field v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table
    :headers="headers"
    :items="this.lista"
    class="elevation-1"
    hide-default-footer
  >
    <template v-slot:item.acao="{item}">
      <v-btn :to="{ name: 'ItensPessoais', params: { Id: item.Id }}" class="mx-2" small color="green">
        Itens Pessoais
      </v-btn>
      <v-btn @click="Editar(item.Id)" class="mx-2" fab small color="info">
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
  <Formulario :form="form" :dialog="dialog" :item="item" @AtualizarTabela="Atualizar"/>
</div>
</template>

<script>
  import Formulario from '@/components/idosos/Formulario'
  export default {
    props:['lista', 'form', 'dialog'],
    components: {Formulario},
    data: () => ({
      search: '',
      headers: [
          { text: '#', align: 'start', value: 'Id',},
          { text: 'Nome', value: 'Nome' },
          { text: 'Data de Nascimento', value: 'dtNasc', align: 'center' },
          { text: 'Ação', value: 'acao', sortable: false, align: 'center' },
      ],
    }),methods: {
      Editar : function(item){
        this.form = 'Editar Idoso #' + item.Id
        this.item = item
        this.dialog = true
        console.log(this.item)
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
    }
  }
</script>