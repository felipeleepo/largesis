<template>
  <v-data-table
    :headers="headers"
    :items="idosos"
    class="elevation-1"
    hide-default-footer
  >
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
</template>

<script>
  export default {
    props:['lista1', 'tipoForm'],
    data: () => ({
        dialog: false,
        headers: [
            { text: '#', align: 'start', value: 'id',},
            { text: 'Nome', value: 'nome' },
            { text: 'Data de Nascimento', value: 'dtNasc', align: 'center' },
            { text: 'Ação', value: 'acao', sortable: false, align: 'center' },
        ],
        idosos: []  
    }),
    methods: {
      Editar : function( item ){
        this.tipoForm = 'Editar Idoso - #' + item.id
        this.$emit('Editar', { form: this.tipoForm, obj: item})
      },
      Excluir : function( item ){
        this.$emit('Excluir', item.id)
      }

    },
    created() {
      this.idosos = this.lista1    
    }
  }
</script>