<script setup>

const props = defineProps({
        videos: {
            type: Object,
            required: true
        }
    })


</script>


<template>
    <div class="grid grid-cols gap-4">
        <iframe width="937" height="527" src="https://www.youtube.com/embed/rUYpww293Yg" title="How to embed a YouTube Video in a Vue Web App" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

   
    </div>
  </template>