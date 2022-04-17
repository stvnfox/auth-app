<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/store/userStore'
import userService from '@/services/userService'

const store = useUserStore()

onMounted(() => {
  store.handleUserRequest(() => userService.getUserData())
})
</script>

<template>
    <h1>Profile</h1>
    <pre>
        {{ store.user }}
    </pre>
</template>
