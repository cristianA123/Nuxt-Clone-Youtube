<script setup>
  useHead({
      title: 'Youtube',
  })
</script>

<template>
  <v-app>
    <Navbar />
    <div class="flex h-screen w-screen bg-miPrimary">
        <slot />
    </div>
  </v-app>
</template>

