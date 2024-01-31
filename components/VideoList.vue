<script setup>

const props = defineProps({
        videos: {
            type: Object,
            required: true
        }
    })


</script>


<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Video v-for="video in videos" :key="video.id" :video="video"/>
   
    </div>
</template>