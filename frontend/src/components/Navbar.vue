<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore'

const store = useUserStore()
const router = useRouter()

const menu = [
  {
    name: 'Home',
    url: '/',
    show: !store.isLoggedIn
  },
  {
    name: 'Register',
    url: '/register',
    show: !store.isLoggedIn
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    show: store.isLoggedIn
  }
]

const logout = () => {
  store.handleLogout()

  router.push({
    name: 'home'
  })
}
</script>

<template>
    <nav class="d-flex my-4">
      <div>
        <router-link
            v-if="!store.isLoggedIn"
            to="/"
            class="me-4"
        >
          Home
        </router-link>
        <router-link
            v-if="!store.isLoggedIn"
            to="/register"
            class="me-4"
        >
          Register
        </router-link>
        <router-link
            v-if="store.isLoggedIn"
            to="/dashboard"
            class="me-4"
        >
          Dashboard
        </router-link>
      </div>
      <button
        v-if="store.isLoggedIn"
        class="btn btn-primary ms-auto"
        @click="logout"
      >
        Logout
      </button>
    </nav>
</template>
