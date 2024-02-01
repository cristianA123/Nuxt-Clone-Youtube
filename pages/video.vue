<script setup>

    const { logout } = useFirebaseAuth()

    const axios = useNuxtApp().$axios
    // const videos = ref([ ])
    // const videoSelected = ref({
    //   kind: 'youtube#searchResult',
    //   etag: 'TKbyzPhVNjgupKmGyTVvKKNFs40',
    //   id: { kind: 'youtube#video', videoId: 'k83VMCZnOro' },
    //   snippet: {
    //     publishedAt: '2022-05-29T00:00:12Z',
    //     channelId: 'UCWH8lhBX5gcbNCKYsbBbn9A',
    //     title: 'WARMISITAY - Milena Warthon (Video Oficial)',
    //     description: 
    //       'Milena Warthon presenta el videoclip de su sencillo titulado “WARMISITAY” MILENA WARTHON, Ganó la Gaviota de Plata en ...',
    //     thumbnails: {
    //       default: {
    //         url: 'https://i.ytimg.com/vi/k83VMCZnOro/default.jpg',
    //         width: 120,
    //         height: 90
    //       },
    //       medium: {
    //         url: 'https://i.ytimg.com/vi/k83VMCZnOro/mqdefault.jpg',
    //         width: 320,
    //         height: 180
    //       },
    //       high: {
    //         url: 'https://i.ytimg.com/vi/k83VMCZnOro/hqdefault.jpg',
    //         width: 480,
    //         height: 360
    //       }
    //     },
    //     channelTitle: 'Milena Warthon',
    //     liveBroadcastContent: 'none',
    //     publishTime: '2022-05-29T00:00:12Z'
    //   }
    // })

    // onMounted(async () => {
    //     const { data } = await axios.get('https://youtube.googleapis.com/youtube/v3/search', {
    //   params: {
    //     part: 'snippet',
    //     type: 'video',
    //     key: 'AIzaSyDOEpl-lbahEuTn4WA4PFAG9WAsmP82lq0',
    //     maxResults: 40 
    //   }
    // });
    //     console.log(data.items)
    //     videos.value = data.items
    // })

</script>

<template>
    <v-app>
      <Navbar />
      <div class="flex h-screen w-screen bg-miPrimary">
        <main class="flex-1 h-full  p-2 sm:px-6 lg:px-8">
              <PlayVideo  />
        </main>
        <div class="w-1/3 ">
            <SideVideos />
        </div>
      </div>
    </v-app>
</template>

