import userRepository, { ILoginParams, IRegisterParams } from '../repositories/userRepository'

export class userService {
  login (params: ILoginParams) {
    return userRepository.login(params)
  }

  signup (params: IRegisterParams) {
    return userRepository.signup(params)
  }

  getUserData () {
    return userRepository.getUserData()
  }
}

// eslint-disable-next-line new-cap
export default new userService()
