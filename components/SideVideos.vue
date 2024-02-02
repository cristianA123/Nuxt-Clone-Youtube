<script setup>
    const {setVideoSelected, videos} = useVideosStore()

    const handleChangeVideo = async (video) => {
        await setVideoSelected(video)
    }
</script>

<template>
    <div>
        <div v-for="video in videos" :key="video.id" class="flex cursor-pointer" @click="handleChangeVideo(video)">
            <figure class="w-48 px-2 py-1">
                    <img class="rounded-lg " :src="video.snippet.thumbnails.medium.url" alt="padre">
            </figure>
            <div class="flex flex-col justify-center">
                <h3 class="font-normal text-sm w-60">{{ video.snippet.title.length <= 30 ? video.snippet.title : video.snippet.title.slice(0, 60) + '...' }}</h3>
                <p class="text-gray-500 text-sm flex flex-wrap">{{ video.snippet.channelTitle  }}</p>
            </div>
        </div>
    </div>
</template>
