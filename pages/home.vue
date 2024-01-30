
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
    <div class="h-screen w-screen px-4 py-16 sm:px-6 lg:px-8">
      <VideoList :videos="videos" />
    </div>
  </template>
