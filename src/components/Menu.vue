<template>
  <v-list dense>
    <v-list-item v-for="m in menu" :key="m.texto" router :to="m.rota">
      <v-list-item-action>
        <v-icon>{{ m.icone}}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ m.texto}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      menu: [
        {icone: 'mdi-home', texto: 'Dashboard', rota: '/dashboard'},
        {icone: 'mdi-home', texto: 'Sobre', rota: '/sobre'}
      ]
    }),
  }
</script>