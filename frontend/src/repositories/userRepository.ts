import axios, { AxiosResponse } from 'axios'
import { useUserStore } from '@/store/userStore'

const store = useUserStore()

export interface ILoginResponse {
    success: boolean;
    token: string;
    msg: string;
}

export interface ILoginParams {
    username: string;
    password: string;
}

export interface IUser {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    date: string;
    __v: number;
}

export interface IUserResponse {
    user: IUser
}

export class userRepository {
  login (params: ILoginParams): Promise<AxiosResponse<ILoginResponse>> {
    return axios.post('http://localhost:5001/api/users/login', params)
  }

  getUserData (): Promise<AxiosResponse<IUserResponse>> {
    return axios.get('http://localhost:5001/api/users/profile', {
      headers: {
        Authorization: store.token ?? ''
      }
    })
  }
}

// eslint-disable-next-line new-cap
export default new userRepository()
