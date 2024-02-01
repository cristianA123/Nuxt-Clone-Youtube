<script setup>
  useHead({
      title: 'My App',
      meta: [
      {
          name: 'description',
          content: 'My super-duper Nuxt app'
      }
      ]
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

