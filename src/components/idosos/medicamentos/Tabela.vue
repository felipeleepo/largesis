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
      <v-btn @click="Retirar(item)" class="mx-2" small color="info">
        Retirar
      </v-btn>
    </template>
    <template v-slot:no-data>
      <p>Nenhum Medicamento encontrado.</p>
    </template>
  </v-data-table>
  </v-card>
  <Formulario :form="form" :dialog="dialog" :item="item" @AtualizarTabela="Atualizar"/>
</div>
</template>

<script>
  import Formulario from '@/components/idosos/medicamentos/Formulario'
  export default {
    props:['lista', 'form', 'dialog'],
    components: {Formulario},
    data: () => ({
      search: '',
      headers: [
          { text: '#', align: 'start', value: 'Id',},
          { text: 'Descrição', value: 'Nome' },
          { text: 'Quantidade', value: 'Qtd', align: 'center' },
          { text: 'Ação', value: 'acao', sortable: false, align: 'center' },
      ],
    }),methods: {
      Retirar : function(item){
        this.form = '#' + item.Id + ' - ' + item.Nome
        this.item = item
        this.dialog = true
        console.log(this.item)
      },
      Atualizar : function(dado){
        if(!dado.antigo){
          this.lista.push(dado.novo)
        }else{
          let indice = this.lista.indexOf(dado.antigo)
          if(parseInt(dado.novo.Qtd) > 0)
            this.lista.splice(indice, 1, dado.novo)
          else
            this.lista.splice(indice, 1)
        }this.$emit('AtualizarPrincipal', false)
        this.item = undefined
      }      
    }
  }
</script>