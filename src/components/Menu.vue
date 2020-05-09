<template>
  <v-list dense>
    <v-list-item three-line>
      <v-list-item-avatar>
        <v-icon>mdi-folder</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Lúcia de Fátima</v-list-item-title>
        <v-list-item-subtitle>Último acesso:<br>00/00/0000 00:00</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item to="/dashboard">
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Página Inicial</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
     
    <v-list-item to="/idosos">
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Idosos</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item to="/medicamentos">
      <v-list-item-icon>
        <v-icon>mdi-pharmacy</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Medicamentos</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>