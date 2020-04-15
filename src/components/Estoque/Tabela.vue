<template>
  <v-data-table
    :headers="headers"
    :items="medicamentos"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Medicamentos</v-toolbar-title>        
        <v-spacer></v-spacer>        
      </v-toolbar>
    </template>
    <template v-slot:item.acao>
        <v-btn class="ma-2" @click="Alertar()" tile color="error">
            <v-icon left>mdi-exclamation</v-icon> Alertar
        </v-btn>
    </template>
    <template v-slot:no-data>
      <p>Nenhum Medicamento encontrado.</p>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    props:['lista2'],
    data: () => ({
        dialog: false,
        headers: [
            {
            text: '#',
            align: 'start',
            value: 'id',
            },
            { text: 'Medicamento', value: 'descricao' },
            { text: 'Quantidade', value: 'qtd' },
            { text: 'Mínimo', value: 'alerta' },
            { text: 'Ação', value: 'acao', sortable: false, align: 'center' },
        ],
        medicamentos: []
    }),
    methods: {
      inicializarTabela () {
        this.medicamentos.forEach(element => {
            element.acao = '<template><v-icon small class="mr-2" >mdi-pencil</v-icon></template>'
        });
      },
      Alertar(){
        console.log('akerta')
      }
    },
    created() {
      this.medicamentos = this.lista2
      this.inicializarTabela()      
    },
    watch:{
      lista2: function(){
         this.medicamentos = this.lista2
      }
      
    }
  }
</script>