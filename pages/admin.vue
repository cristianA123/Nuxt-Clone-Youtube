<script setup>

    const { logout } = useFirebaseAuth()

</script>


<template>
    <div>
        <h1>admin</h1>
        <button @click="logout">Salir</button>
    </div>
</template>

