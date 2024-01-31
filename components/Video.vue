<script setup>

    const props = defineProps({
        video: {
            type: Object,
            required: true
        }
    })

    const play = () => {
        console.log('play')
        console.log(props.video)
        console.log('play')
    }


</script>


<template>
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
  <!-- <iframe width="937" height="527" src="https://www.youtube.com/embed/EHnCPZyvL5A?list=RDEHnCPZyvL5A" title="Metal Family - Smell Like Cherry // Letra (Sub Español)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->