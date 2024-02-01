
<script setup>

    definePageMeta({
      middleware: 'auth'
    })

    const { logout } = useFirebaseAuth()

    const { videos} = toRefs(useVideosStore())
    const {getVideos} = useVideosStore()

    onMounted(async () => {
      await getVideos()
    });
       
</script>

<template>
      <div class="w-20">
        <Sidebar />
      </div>
      <main class="flex-1  p-2 sm:px-6 lg:px-8">
        <Tags />
        <VideoList :videos="videos" />
      </main>
</template>