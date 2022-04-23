<script setup lang="ts">
import { reactive, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import userService from '@/services/userService'

const state = reactive({
  username: '',
  password: '',
  confirm_password: '',
  name: '',
  email: ''
})

const registerSucceed = ref(false)

const mustBeSame = (value: string) => value === state.password

const rules = {
  username: {
    required
  },
  name: {
    required
  },
  email: {
    required,
    email
  },
  password: {
    required
  },
  confirm_password: {
    required,
    mustBeSame
  }
}

const v$ = useVuelidate(rules, state)

const submitRegister = async () => {
  const isFormCorrect = await v$.value.$validate()

  if (!isFormCorrect) {
    return console.log('Error')
  } else {
    userService.signup({
      name: state.name,
      username: state.username,
      email: state.email,
      password: state.password,
      confirm_password: state.confirm_password
    })
      .then(() => {
        registerSucceed.value = true
      })
  }
}
</script>

<template>
    <div class="card">
        <div class="card-body p-5">
            <h2 class="mb-4">
                Sign up
            </h2>
            <!-- TODO: Show message when no success registering -->
            <form v-if="!registerSucceed" class="login-form" @submit.prevent="submitRegister">
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
                    <div v-if="v$.username.$error" class="text-sm text-danger">
                        Username is required
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="name" class="mb-1">
                        Name
                    </label>
                    <input
                        id="Name"
                        v-model="state.name"
                        type="text"
                        :class="{'is-invalid': v$.name.$error}"
                        class="form-control"
                    >
                    <div v-if="v$.name.$error" class="text-sm text-danger">
                        Name is required
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="email" class="mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        v-model="state.email"
                        type="text"
                        :class="{'is-invalid': v$.email.$error}"
                        class="form-control"
                    >
                    <div v-if="!v$.email.$model && v$.email.$error" class="text-sm text-danger">
                        Email is required
                    </div>
                    <div v-if="v$.email.$model && v$.email.email.$invalid" class="text-sm text-danger">
                        This is not a valid email address
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
                    <div v-if="v$.password.$error" class="text-danger">
                        Password is required
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="confirm_password" class="mb-1">
                        Confirm password
                    </label>
                    <input
                        id="confirm_password"
                        v-model="state.confirm_password"
                        type="password"
                        :class="{'is-invalid': v$.confirm_password.$error}"
                        class="form-control"
                    >
                    <div v-if="!v$.confirm_password.$model && v$.confirm_password.$error" class="text-danger">
                        Password is required
                    </div>
                    <div v-if="v$.confirm_password.$model && v$.confirm_password.mustBeSame.$invalid" class="text-danger">
                        Passwords must be the same
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mb-3">
                    Sign up
                </button>
                <p class="mb-0">
                    Already have an account?
                    <router-link to="/">
                        Log in
                    </router-link>
                </p>
            </form>
            <div v-else>
                <h3 class="text-success">
                    Successfully registered
                </h3>
                <p>Welcome to the club!</p>
                <router-link to="/" class="btn btn-primary">
                    Click here to login
                </router-link>
            </div>
        </div>
    </div>
</template>
