<script setup lang="ts">
import { reactive, watch } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore'
import userService from '@/services/userService'

const store = useUserStore()
const router = useRouter()

const state = reactive({
  username: '',
  password: ''
})

const rules = {
  username: {
    required
  },
  password: {
    required
  }
}

const v$ = useVuelidate(rules, state)

const submitLogin = async () => {
  const isFormCorrect = await v$.value.$validate()

  if (!isFormCorrect) {
    return console.log('Error')
  } else {
    store.handleLogin(() => userService.login({
      username: state.username,
      password: state.password
    }))

    watch(
      () => store.status,
      () => {
        if (store.status === 'Success') {
          router.push({
            name: 'dashboard'
          })
        }
      }
    )
  }
}
</script>

<template>
    <div class="card">
        <div class="card-body p-5">
            <h2 class="mb-4">
                Sign in
            </h2>
            <form class="login-form" @submit.prevent="submitLogin">
                <div class="form-group mb-3">
                    <label for="username" class="mb-1">
                        Username
                    </label>
                    <input
                        id="username"
                        v-model="state.username"
                        type="text"
                        :class="{'is-invalid': v$.username.$error}"
                        class="form-control"
                    >
                    <div class="text-sm text-danger" v-if="v$.username.$error">
                        Username is required
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="password" class="mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        v-model="state.password"
                        type="password"
                        :class="{'is-invalid': v$.password.$error}"
                        class="form-control"
                    >
                    <div class="text-danger" v-if="v$.password.$error">
                        Password is required
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mb-3">
                    Sign in
                </button>
                <div v-if="store.status === 'Failed'" class="text-danger mb-3">
                    Login failed: Your username or password is incorrect
                </div>
                <p class="mb-0">
                    Don't have an account yet?
                    <router-link to="/register">
                        Sign up
                    </router-link>
                </p>
            </form>
        </div>
    </div>
</template>
