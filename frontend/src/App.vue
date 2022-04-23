<script setup lang="ts">
import Navbar from './components/Navbar.vue'

</script>

<template>
  <div class="container">
    <navbar/>
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
