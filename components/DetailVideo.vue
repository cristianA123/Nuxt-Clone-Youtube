<script setup>

    const props = defineProps({
        video: {
            type: Object,
            required: true
        }
    })

    const videoSrc= ref(props.video.id.videoId);

    const chanfe = () => {
        videoSrc.value = '9J6IVbkY0Bs';
        console.log(props.video.kind)
    }

</script>


<template>
    <div class="">
        <h2 class="font-semibold py-4">{{ video.snippet.title }}</h2>
        <div class="flex justify-between">
            <div class="flex">
                <div class="flex mr-4">
                    <img class="h-12 rounded-full w-12 mr-2" src="https://i.ytimg.com/vi/k83VMCZnOro/mqdefault.jpg" alt="">
                    <div class="">
                        <p class="font-semibold">{{ video.snippet.channelTitle }}</p>
                        <p class="text-xs text-gray-400">24.2 k suscriptores</p>
                    </div>
                </div>
                <div class="bg-white text-black p-4 h-10 flex items-center rounded-xl mx-2">
                    <p class="font-normal">Suscribirse</p>
                </div>
            </div>
            <div class="flex gap-3">
                <div class="flex gap-3 h-10 bg-miSecondary px-4 py-2 justify-center items-center rounded-full">
                    <v-icon class="font-light" icon="mdi-thumb-up-outline"></v-icon>
                    <p class="pr-2 border-r font-normal">396k</p>
                    <v-icon class="font-light" icon="mdi-thumb-down-outline"></v-icon>
                </div>
                <div class="flex gap-3 h-10 bg-miSecondary px-4 py-2 justify-center items-center rounded-full">
                    <v-icon class="font-light" icon="mdi-share-outline"></v-icon>
                    <p>Compartir</p>
                </div>
                <div class="flex gap-3 h-10 bg-miSecondary px-4 py-2 justify-center items-center rounded-full">
                    <v-icon class="font-light" icon="mdi-arrow-down"></v-icon>
                    <p>Descargar</p>
                </div>
                <div class="flex gap-3 h-10 bg-miSecondary px-2 py-2 justify-center items-center rounded-full">
                    <v-icon class="font-light" icon="mdi-dots-horizontal"></v-icon>
                </div>
            </div>
        </div>

        <div class="bg-miSecondary py-2 px-4 my-2 rounded-lg">
            <p class="font-semibold text-sm">8.3 M de vistas  hace 2 años</p>
            <p>{{ video.snippet.description }}</p>
        </div>
    </div>
</template>
