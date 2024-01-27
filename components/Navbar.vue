<template>
  <v-app-bar app color="white" elevation="0">
    <v-app-bar-nav-icon @click="toggleSidebar"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-text-field v-model="search" label="Buscar" hide-details dense prepend-inner-icon="mdi-magnify" class="mx-4"></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
    const emit  = defineEmits(["toggleSidebar"]);

    const  search= ref('');
    const  darkMode= ref(false);

    const toggleSidebar = () => {
      console.log('tttttt')
      emit('toggleSidebar'); // Emite un evento para que el componente principal maneje la apertura/cierre del Sidebar
    }
    const logout = () => {
      // Lógica para cerrar sesión
    }
</script>
