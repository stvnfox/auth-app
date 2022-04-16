<script setup lang="ts">
const menu = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Register',
    url: '/register'
  }
]
</script>

<template>
    <nav class="my-4">
        <router-link
            v-for="item in menu"
            :key="item"
            :to="item.url"
            class="me-4"
        >
            {{ item.name }}
        </router-link>
    </nav>
</template>
