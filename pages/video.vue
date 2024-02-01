<script setup>
    definePageMeta({
      middleware: 'auth'
    })
</script>

<template>
    <main class="flex-1 h-full  p-2 sm:px-6 lg:px-8">
          <PlayVideo  />
    </main>
    <div class="w-1/3 ">
        <SideVideos />
    </div>
</template>

