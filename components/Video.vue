<script setup>
    const {videosLoading} = toRefs(useVideosStore())
    const {setVideoSelected} = useVideosStore()

    const props = defineProps({
        video: {
            type: Object,
            required: true
        }
    })
    const play = async () => {
        await setVideoSelected(props.video)
        await navigateTo('/video')
    }
</script>

<template>
    <!-- <v-skeleton-loader type="card-avatar"></v-skeleton-loader> -->
    <div class="p-2 border-box " @click="play">
        <figure class="cursor-pointer" >
            <img class="rounded-2xl" :src="video.snippet.thumbnails.medium.url" alt="padre">
        </figure>
        <div class="flex pt-3 gap-3 cursor-pointer">
            <figure>
                <div class="h-12 w-12 rounded-full overflow-hidden bg-red-300">
                    <img :src="video.snippet.thumbnails.default.url" alt="perfil">
                </div>
            </figure>
            <div>
                <h3 class="font-bold text-sm">{{ video.snippet.title }}</h3>
                <p class="text-gray-500 text-sm flex flex-wrap">{{ video.snippet.channelTitle }}</p>
            </div>
        </div>
    </div>
  </template>