<template>
    <v-app>
      <Navbar @toggleSidebar="toggleSidebar" />
      <Sidebar v-if="drawer" />
      <v-container fluid>
        <!-- Contenido principal de la página -->
      </v-container>
    </v-app>
  </template>
  
  <script setup>
  
      const drawer = ref(false);
      const toggleSidebar = () => {
        drawer.value = !drawer.value;
      };
  
  </script>