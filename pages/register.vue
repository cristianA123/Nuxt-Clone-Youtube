        
<script setup>

    const { register } = useFirebaseAuth()

    const email = ref('');
    const password = ref('');

    const handleSubmit = async (e) => {
        try {

            await register(email.value, password.value)
          
        } catch (error) {
            console.log(error)
        }
    };
    

</script>

<template>
    <div class="h-screen w-screen bg-red-300">

        <form @submit.prevent="handleSubmit" class="">
            <div class="flex flex-col">
                <h1>Register</h1>
                <input v-model="email" type="email" placeholder="email">
                <input v-model="password" type="password" placeholder="*********">
                <button type="submit">Registar</button>
            </div>
        </form>
    </div>
</template>

