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

    <v-list-group prepend-icon="mdi-cart">
      <template v-slot:activator>
        <v-list-item-title>Estoque</v-list-item-title>
      </template>
      <v-list-item v-for="m in menu[0]" :key="m.texto" router :to="m.rota">
        <v-list-item-icon></v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ m.texto }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>

    <v-divider></v-divider>

    <v-list-group prepend-icon="mdi-pharmacy">
      <template v-slot:activator>
        <v-list-item-title>Medicamentos</v-list-item-title>
      </template>
      <v-list-item v-for="m in menu[1]" :key="m.texto" router :to="m.rota">
        <v-list-item-icon></v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ m.texto }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>

    <v-divider></v-divider>

    <v-list-group prepend-icon="account_circle">
      <template v-slot:activator>
        <v-list-item-title>Pessoas</v-list-item-title>
      </template>
      <v-list-item v-for="m in menu[2]" :key="m.texto" router :to="m.rota">
        <v-list-item-icon></v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ m.texto }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>

    <v-divider></v-divider>
  </v-list>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      dados: [

      ],
      menu: [[
          {texto: 'Entradas', rota: '/estoque/entradas'},
          { texto: 'Saídas', rota: '/estoque/saidas'},
          {texto: 'Relatórios', rota: '/estoque/relatorios'}
        ],
        [
          {texto: 'Gerenciar', rota: '/medicamentos/gerenciar'}
        ],
        [
          {texto: 'Idosos', rota: '/pessoas/idosos'},
          {texto: 'Profissionais', rota: '/pessoas/profissionais'},
          {texto: 'Perfis', rota: '/pessoas/perfis'}
        ]
        
      ]
    }),
  }
</script>