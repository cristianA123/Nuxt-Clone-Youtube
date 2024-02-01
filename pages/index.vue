
<script setup>

    definePageMeta({
      middleware: 'auth'
    })

    const { logout } = useFirebaseAuth()

    const {videos} = useVideosStore()

    const axios = useNuxtApp().$axios

    onMounted(async () => {
      //   const { data } = await axios.get('https://youtube.googleapis.com/youtube/v3/search', {
      // params: {
      //   part: 'snippet',
      //   type: 'video',
      //   key: 'AIzaSyDOEpl-lbahEuTn4WA4PFAG9WAsmP82lq0',
      //   maxResults: 40 
      // }
    });
       
</script>

<template>
      <div class="w-20">
        <Sidebar2 />
      </div>
      <main class="flex-1  p-2 sm:px-6 lg:px-8">
        <Tags />
        <VideoList :videos="videos" />
      </main>
</template>