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
      // Lógica para manejar la apertura/cierre del Sidebar
      console.log('click')
      drawer.value = !drawer.value;
      console.log(drawer.value)
      // this.$refs.sidebar.drawer = !this.$refs.sidebar.drawer;
    };

</script>