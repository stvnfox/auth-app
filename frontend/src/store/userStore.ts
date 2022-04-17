import { defineStore } from 'pinia'
import { ILoginResponse, IUser, IUserResponse } from '@/repositories/userRepository'
import { AxiosResponse } from 'axios'
import router from '@/router'

export const useUserStore = defineStore('user-store', {
  state: () => ({
    token: '',
    status: '',
    user: {} as IUser
  }),
  getters: {
    isLoggedIn: (state) => {
      if (state.token) {
        return true
      } else {
        return false
      }
    }
  },
  actions: {
    handleLogin (loginFunc: () => Promise<AxiosResponse<ILoginResponse>>) {
      return loginFunc()
        .then((data) => {
          this.token = data.data.token
          this.status = 'Success'
        })
        .catch(() => {
          this.status = 'Failed'
        })
    },
    handleLogout () {
      this.user = {} as IUser
      this.token = ''
    },
    handleUserRequest (userRequestFunc: () => Promise<AxiosResponse<IUserResponse>>) {
      return userRequestFunc()
        .then((data) => {
          this.user = data.data.user
        })
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
        paths: ['user', 'token', 'isLoggedIn']
      }
    ]
  }
})
