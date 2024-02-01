<script setup>
  useHead({
      title: 'Youtube',
  })
</script>

<template>
  <v-app>
      <Navbar  />
    <div class="flex h-screen w-screen bg-miPrimary mt-14">
        <slot />
    </div>
  </v-app>
</template>

