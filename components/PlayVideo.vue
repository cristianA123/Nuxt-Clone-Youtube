<script setup>

    const props = defineProps({
        video: {
            type: Object,
            required: true
        }
    })

    // const videoSrc= ref('rUYpww293Yg');
    const videoSrc= ref(props.video.id.videoId);

    const chanfe = () => {
        videoSrc.value = '9J6IVbkY0Bs';
        console.log(props.video.kind)
    }

</script>


<template>
    <div class=" h-full">
            <iframe 
            class="w-full h-3/4"
            :src="`https://www.youtube.com/embed/${videoSrc}`" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <DetailVideo :video="video"/>
        <!-- <button @click="chanfe">cambiar</button> -->
    </div>
</template>
