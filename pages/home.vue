
<script setup>

    const { logout } = useFirebaseAuth()

    const axios = useNuxtApp().$axios
    const videos = ref([ ])

    onMounted(async () => {
        const { data } = await axios.get('https://youtube.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        type: 'video',
        key: 'AIzaSyDOEpl-lbahEuTn4WA4PFAG9WAsmP82lq0',
        maxResults: 40 
      }
    });
        console.log(data.items)
        videos.value = data.items
    })


</script>

<template>
  <v-app>
    <Navbar />
    <div class="flex h-screen w-screen bg-miPrimary">
      <!-- Barra lateral -->
      <div class="w-20">
        <Sidebar2 />
      </div>
      <!-- Contenido principal -->
      <div class="flex-1  p-2 sm:px-6 lg:px-8">
        <Tags />
        <VideoList :videos="videos" />
      </div>
    </div>
  </v-app>
</template>

<!-- <template>
  <v-app>
    <Navbar />
    <div class="h-screen w-screen px-4 sm:px-6 lg:px-8">
      <Sidebar2 class="bg-purple-400" />
      <main class="bg-green-400">
        <Tags />
        <VideoList :videos="videos" />
      </main>
    </div>
  </v-app>
  </template> -->
