<script setup lang="ts">
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

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

const submitRegister = async () => {
  const isFormCorrect = await v$.value.$validate()

  if (!isFormCorrect) {
    return console.log('Error')
  } else {
    // Register call
  }
}
</script>

<template>
    <div class="card">
        <div class="card-body p-5">
            <h2 class="mb-4">
                Sign up
            </h2>
            <form class="login-form" @submit.prevent="submitRegister">
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
                <button type="submit" class="btn btn-primary">
                    Sign up
                </button>
            </form>
        </div>
    </div>
</template>