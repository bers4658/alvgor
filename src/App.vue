<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >

    <v-list>
      <v-list-item v-for="link in links" :key="link.title" :to="link.url">
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>

    </v-navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Интернет магазин</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-autocomplete
      :search-input.sync="search"
      class="mx-16 mt-2"
      flat
      hide-no-data
      label="Поиск по товарам"
      solo-inverted
    ></v-autocomplete>
        <v-btn v-for="link in links" :key="link.title" :to="link.url" color="primary">
          <v-icon left>
            {{link.icon}}
          </v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    data: () => ({ 
      drawer: false,
      links: [
        {title: 'Login', icon: 'mdi-lock', url: '/login'},
        {title: 'Registrator', icon: 'mdi-face-man-outline', url: '/registrator'},
        {title: 'Orders', icon: 'mdi-wallet-membership', url: '/orders'},
        {title: 'New ad', icon: 'mdi-plus-box-multiple', url: '/new'},
        {title: 'My ads', icon: 'mdi-playlist-plus', url: '/list'},
        {title: 'Каталог', icon: 'mdi-package-variant-closed', url: '/catalog'},
        {title: 'Карзина', icon: 'mdi-cart', url: '/cart'},
        {title: 'Избранное', icon: 'mdi-heart', url: '/favorites'},
      ],
        
        search: null,
    }),
  }
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>