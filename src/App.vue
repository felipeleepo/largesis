<template>
<v-app>
  <v-navigation-drawer v-model="drawer" app>
    <Menu/>
  </v-navigation-drawer>
  <v-app-bar app dark>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title>LARGERSIS</v-toolbar-title>
  </v-app-bar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>    
  </v-content>
  <v-footer dark app>
    <span class="white--text">&copy; 2019</span>
  </v-footer>
</v-app>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'App',
  components:{
    Menu
  },
  data(){
    return {
      drawer: false
    }
  }
}
</script>

<style>
</style>