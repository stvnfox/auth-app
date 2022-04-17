import userRepository, { ILoginParams } from '../repositories/userRepository'

export class userService {
  login (params: ILoginParams) {
    return userRepository.login(params)
  }

  getUserData () {
    return userRepository.getUserData()
  }
}

// eslint-disable-next-line new-cap
export default new userService()
