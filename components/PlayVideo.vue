<script setup>

    const {videoSelected, videos} = useVideosStore()


    const videoSrc= ref(videoSelected.id.videoId);


</script>


<template>
    <div class=" h-full">
            <iframe 
            class="w-full h-3/4"
            :src="`https://www.youtube.com/embed/${videoSrc}`" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <DetailVideo />
        <!-- <button @click="chanfe">cambiar</button> -->
    </div>
</template>
