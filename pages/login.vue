<template>
    <v-container>
      <v-form @submit.prevent="login">
        <v-text-field v-model="username" label="Username"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
        <v-btn type="submit" color="primary">Login</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const route = useRoute();
  
  const username = ref('');
  const password = ref('');
  
  const login = () => {
    // Aquí implementa la lógica de autenticación con tu backend
    // Puedes usar servicios como Axios para hacer solicitudes HTTP
    console.log('Username:', username.value);
    console.log('Password:', password.value);
  
    // Lógica de autenticación aquí...
  
    // Redirige al usuario después de iniciar sesión
    this.$router.push('/dashboard');
  };
  </script>