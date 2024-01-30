<script setup>

    const { logout } = useFirebaseAuth()

</script>


<template>
    <div>
        <h1>admin</h1>
        <button @click="logout">Salir</button>
        <iframe width="937" height="527" src="https://www.youtube.com/embed/rUYpww293Yg" title="How to embed a YouTube Video in a Vue Web App" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</template>

