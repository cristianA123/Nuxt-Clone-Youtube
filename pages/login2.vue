        
<script setup>

const { login } = useFirebaseAuth()

const email = ref('');
const password = ref('');

const handleSubmit = async (e) => {
    try {

        await login(email.value, password.value)
        await navigateTo('/admin')
      
    } catch (error) {
        console.log(error)
    }
};


</script>

<template>
<div class="h-screen w-screen bg-green-300">

    <form @submit.prevent="handleSubmit" class="">
        <div class="flex flex-col">
            <h1>Register</h1>
            <input v-model="email" type="email" placeholder="email">
            <input v-model="password" type="password" placeholder="*********">
            <button type="submit">Login</button>
        </div>
    </form>
</div>
</template>

