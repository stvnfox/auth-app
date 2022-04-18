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

export interface IRegisterParams {
  name: string;
  username: string;
  email: string;
  password: string;
  // eslint-disable-next-line camelcase
  confirm_password: string;
}
export interface IRegisterResponse {
  success?: boolean;
  msg: string;
}

export class userRepository {
  login (params: ILoginParams): Promise<AxiosResponse<ILoginResponse>> {
    return axios.post('http://localhost:5001/api/users/login', params)
  }

  signup (params: IRegisterParams): Promise<AxiosResponse<IRegisterResponse>> {
    return axios.post('http://localhost:5001/api/users/register', params)
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
