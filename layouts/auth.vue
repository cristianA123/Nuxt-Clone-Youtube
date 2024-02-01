<script setup>
useHead({
    title: 'My App2',
    meta: [
    {
        name: 'description',
        content: 'My super-duper Nuxt app'
    }
    ]
})
</script>

<template>
    <div>
        <slot></slot>
    </div>
</template>

