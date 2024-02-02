
<script setup>

    definePageMeta({
      middleware: 'auth'
    })

    const { videos} = toRefs(useVideosStore())
    const {getSearchVideos} = useVideosStore()

    onMounted(async () => {
      await getSearchVideos()
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