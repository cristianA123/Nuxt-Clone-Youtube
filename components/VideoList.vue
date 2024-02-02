<script setup>
    const props = defineProps({
        videos: {
            type: Object,
            required: true
        }
    })
    const {videosLoading} = toRefs(useVideosStore())
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <v-skeleton-loader v-if="videosLoading" v-for="i in 20" :key="i*5" type="card-avatar"></v-skeleton-loader>
        <Video v-else v-for="video in videos" :key="video.id" :video="video"/>
    </div>
</template>