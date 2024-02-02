<script setup>
    const  search= ref('');
    const { getSearchVideos } = useVideosStore()

    const handleHome = async () => {
      await navigateTo('/')
    }

    const handleSearch = async () => {
      await getSearchVideos(search.value)
    }
</script>

<template>
  <nav class="bg-miPrimary px-4 py-0 fixed top-0 w-full z-50">
    <div class="mx-auto flex justify-between items-center">
      <!-- Logo de YouTube -->
      <div class="flex justify-center items-center" @click="handleHome">
        <div class=" flex justify-center items-center rounded-full hover:bg-miSecondary w-10 h-10 mr-4">
          <v-icon class="font-light" icon="mdi-menu"></v-icon>
        </div>
        <div class="flex cursor-pointer justify-center items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube Logo" class="h-5 w-7 mr-1">
          <p class="font-semibold  text-xl tracking-tighter">YouTube</p>
        </div>
      </div>
      <!-- Barra de búsqueda -->
      <div class="flex justify-center items-center w-1/2">
        <div class="flex justify-center items-center w-full">
          <input
            type="text"
            v-model="search"
            placeholder="Buscar"
            @keyup.enter="handleSearch" 
            class="w-full h-10 pl-8  border border-miBorder-2 rounded-l-full bg-miBg text-white focus:outline-none z-10 focus:border-miFocus focus:ring-miFocus focus:ring-1"
          />
          <div class="w-20 h-10 flex justify-center items-center rounded-r-full bg-miSecondary" @click="handleSearch">
            <v-icon class="text-gray-500" icon="mdi-magnify" size="large"></v-icon>
          </div>
        </div>
        <div class="m-2 bg-miSecondary w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-700">
          <v-icon class="font-light" icon="mdi-microphone"></v-icon>
        </div>
      </div>
      <div class="flex items-center space-x-8 justify-center">
        <v-icon class="font-light" icon="mdi-video-plus-outline"></v-icon>
        <v-icon class="font-light" icon="mdi-bell-outline"></v-icon>
        <img src="https://cdn.discordapp.com/attachments/965298358375841792/1202316904178384996/image.png?ex=65cd03df&is=65ba8edf&hm=4705e522d714ef60d75e640dcef2717e4316e06e9694a94f7343a87c5999f259&" alt="Avatar" class="h-8 w-8 rounded-full">
      </div>
    </div>
  </nav>
</template>
