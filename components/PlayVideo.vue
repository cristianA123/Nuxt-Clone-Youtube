<script setup>
    const {videoSelected} = toRefs(useVideosStore())  
    // if( !isAuthenticated && to.path !== '/login') {
    if( !videoSelected) {
        navigateTo('/login')
    }
</script>


<template>
    <div class=" h-full">
            <iframe 
            class="w-full h-3/4"
            :src="`https://www.youtube.com/embed/${videoSelected.id.videoId}`" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <DetailVideo />
    </div>
</template>
